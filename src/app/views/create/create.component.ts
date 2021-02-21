import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { OptionValue } from '../../components/select/select.component';
import { Genders, Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'bdb-create',
  templateUrl: './create.component.html',
  styleUrls: [],
})
export class BdbCreateComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  error: any;
  saving = false;

  destroy$ = new Subject();

  genderOptions: OptionValue[] = [
    { label: 'Male', value: Genders.Male },
    { label: 'female', value: Genders.Female },
  ];

  constructor(private fb: FormBuilder, private router: Router, private personService: PersonService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      identification: [, [Validators.required]],
      fullname: [, [Validators.required]],
      gender: [Genders.Male, [Validators.required]],
      birth: [, [Validators.required]],
      test: [,],
    });
  }

  create() {
    this.form.markAllAsTouched();
    this.form.markAsDirty();
    if (this.form.invalid) {
      return;
    }
    const person: Person = this.form.value;
    this.saving = true;
    this.personService
      .create(person)
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
