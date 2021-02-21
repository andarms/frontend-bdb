import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { OptionValue } from 'src/app/components/select/select.component';
import { Genders, Person } from 'src/app/models/person.model';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'bdb-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss'],
})
export class BdbAdoptComponent implements OnInit {
  form!: FormGroup;

  destroy$ = new Subject();

  saving = false;

  females: OptionValue[] = [];
  males: OptionValue[] = [];
  children: OptionValue[] = [];
  error: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private personService: PersonService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fatherId: [, [Validators.required]],
      motherId: [, [Validators.required]],
      childId: [, [Validators.required]],
    });

    this.personService
      .findAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((persons) => this.filterPersons(persons));
  }

  filterPersons(persons: Person[]): void {
    this.males = persons
      .filter((x) => x.gender == Genders.Male)
      .map((x) => ({ label: `${x.identification} - ${x.fullname}`, value: x.id }));
    this.females = persons
      .filter((x) => x.gender == Genders.Female)
      .map((x) => ({ label: `${x.identification} - ${x.fullname}`, value: x.id }));
    this.children = persons.map((x) => ({ label: `${x.identification} - ${x.fullname}`, value: x.id }));
  }

  adopt() {
    this.form.markAllAsTouched();
    this.form.markAsDirty();
    if (this.form.invalid) {
      return;
    }
    if (!this.validate()) {
      this.error = [`child can't be the same as the parents`];
      return;
    }
    const relativesIds = this.form.value;
    this.personService
      .adopt(relativesIds)
      .pipe(takeUntil(this.destroy$))
      .pipe(
        catchError((error) => {
          this.error = error;
          this.saving = false;
          return of(error);
        })
      )
      .subscribe((data: any) => {
        this.saving = false;
        if (data?.error) {
          this.error = data.error;
          return;
        }
        this.router.navigate(['/']);
      });
  }

  validate() {
    const { fatherId, motherId, childId } = this.form.value;
    if (childId === motherId || childId === fatherId) {
      return false;
    }
    return true;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
