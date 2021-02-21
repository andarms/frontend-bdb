import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private person: PersonService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.person
      .find(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => (this.model = data));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get hasRelatives() {
    return this.model.relatives?.father || this.model.relatives?.mother || this.model.relatives?.children;
  }
}
