import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { BdbInputComponent } from 'src/app/components/input/input.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

import { BdbCreateComponent } from './create.component';

// it cuold be imported from other file but right now i just want end the  activity
class PersonServiceMock {
  findAll(): Observable<Person[]> {
    return of([]);
  }
}

describe('CreateComponent', () => {
  let component: BdbCreateComponent;
  let fixture: ComponentFixture<BdbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbCreateComponent, BdbInputComponent, SelectComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: PersonService, useClass: PersonServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
