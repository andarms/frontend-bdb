import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { SelectComponent } from 'src/app/components/select/select.component';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

import { BdbAdoptComponent } from './adopt.component';

// it cuold be imported from other file but right now i just want end the  activity
class PersonServiceMock {
  findAll(): Observable<Person[]> {
    return of([]);
  }
}
describe('AdoptComponent', () => {
  let component: BdbAdoptComponent;
  let fixture: ComponentFixture<BdbAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbAdoptComponent, SelectComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: PersonService, useClass: PersonServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
