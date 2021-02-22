import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

import { BdbDetailsComponent } from './details.component';

class PersonServiceMock {
  findAll(): Observable<Person[]> {
    return of([]);
  }
}

describe('DetailsComponent', () => {
  let component: BdbDetailsComponent;
  let fixture: ComponentFixture<BdbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BdbDetailsComponent],
      providers: [{ provide: PersonService, useClass: PersonServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
