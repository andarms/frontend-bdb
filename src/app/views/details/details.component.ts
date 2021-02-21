import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'bdb-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class BdbDetailsComponent implements OnInit, OnDestroy {
  model!: Person;

  destroy$ = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private person: PersonService) {}

  get hasRelatives() {
    return this.model?.relatives?.father || this.model?.relatives?.mother || this.model?.relatives?.children;
  }

  get father() {
    return this.model?.relatives?.father;
  }

  get mother() {
    return this.model?.relatives?.mother;
  }

  get children() {
    return this.model?.relatives?.children;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.loadData(id);
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = params.id;
      this.loadData(id);
    });
  }

  loadData(id: number) {
    if (!id) {
      return;
    }
    this.person
      .find(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.model = data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigate(id: number) {
    this.router.navigate(['/persons', id.toString()]);
  }
}
