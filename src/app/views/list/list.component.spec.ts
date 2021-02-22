import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { BdbTableComponent } from 'src/app/components/table/table.component';
import { BdbGenderPipe } from 'src/app/pipes/gender.pipe';

import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import { testPersons } from '../../services/person.service.spec';
import { BdbListComponent } from './list.component';

@Component({ template: '' })
export class DummyComponent {}

const routes: Routes = [
  { path: 'persons/create', component: DummyComponent },
  { path: 'persons/adopt', component: DummyComponent },
];

class PersonServiceMock {
  findAll(): Observable<Person[]> {
    return of([]);
  }
}

describe('ListComponent', () => {
  let component: BdbListComponent;
  let fixture: ComponentFixture<BdbListComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbListComponent, BdbTableComponent, BdbGenderPipe],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: PersonService, useClass: PersonServiceMock }],
    }).compileComponents();
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show person list table', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty message', () => {
    expect(component).toBeTruthy();
  });

  it('should navigateto create', fakeAsync(() => {
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('#createButton')).nativeElement;
    button.dispatchEvent(new Event('click'));
    tick();
    expect(location.path()).toBe('/persons/create');
  }));

  it('should navigateto create', fakeAsync(() => {
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('#adoptButton')).nativeElement;
    button.dispatchEvent(new Event('click'));
    tick();
    expect(location.path()).toBe('/persons/adopt');
  }));

  it('should navigateto details', fakeAsync(() => {
    const serviceSpy = spyOn(PersonServiceMock.prototype, 'findAll').and.returnValue(of(testPersons));
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
    fixture.detectChanges();
    console.log(fixture.debugElement.nativeElement);
    const button: HTMLElement = fixture.debugElement.query(By.css('table tr td a')).nativeElement;
    button.dispatchEvent(new Event('click'));
    tick(400);
    expect(location.path()).toBe('');
  }));
});
