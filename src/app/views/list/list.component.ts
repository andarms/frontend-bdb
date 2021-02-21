import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'bdb-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class BdbListComponent implements OnInit, OnDestroy {
  persons: Person[] = [];
  destroy$ = new Subject();

  constructor(private person: PersonService) {}

  ngOnInit(): void {
    this.person
      .findAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((persons) => (this.persons = persons));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
