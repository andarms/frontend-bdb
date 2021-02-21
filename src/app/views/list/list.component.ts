import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'bdb-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class BdbListComponent implements OnInit {
  persons: Person[] = [];
  constructor(private person: PersonService) {}

  ngOnInit(): void {
    this.person.findAll().subscribe((persons) => (this.persons = persons));
  }
}
