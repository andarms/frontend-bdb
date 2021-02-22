import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Genders, Person } from '../models/person.model';
import { PersonService } from './person.service';

export const testPersons: Person[] = [
  {
    id: 1,
    identification: '001',
    fullname: 'test user  1',
    birth: new Date(2021, 1, 20),
    gender: Genders.Male,
  },
  {
    id: 2,
    identification: '002',
    fullname: 'test user  2',
    birth: new Date(2021, 1, 20),
    gender: Genders.Male,
  },
];

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'BACKEND_URL', useValue: 'testurl.com' }],
    });
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get person list', (done) => {
    const httpSpy = spyOn(HttpClient.prototype, 'get').and.returnValue(of(testPersons));
    service.findAll().subscribe((data) => {
      expect(httpSpy).toHaveBeenCalledWith(`testurl.com/api/person`);
      expect(data.length).toBe(testPersons.length);
      done();
    });
  });

  it('should get single person', (done) => {
    const model = testPersons[0];
    const httpSpy = spyOn(HttpClient.prototype, 'get').and.returnValue(of(model));
    service.find(model.id).subscribe((data) => {
      expect(httpSpy).toHaveBeenCalledWith(`testurl.com/api/person/${model.id}`);
      expect(data.id).toBe(model.id);
      expect(data.identification).toBe(model.identification);
      expect(data.fullname).toBe(model.fullname);
      expect(data.gender).toBe(model.gender);
      expect(data.birth).toBe(model.birth);
      done();
    });
  });

  it('should create person', (done) => {
    const model = testPersons[0];
    const httpSpy = spyOn(HttpClient.prototype, 'post').and.returnValue(of(null));
    service.create(model).subscribe((data) => {
      expect(httpSpy).toHaveBeenCalledWith(`testurl.com/api/person`, model);
      done();
    });
  });

  it('should adopt person', (done) => {
    const model = { fatherId: 1, motherId: 2, childId: 3 };
    const httpSpy = spyOn(HttpClient.prototype, 'post').and.returnValue(of(null));
    service.adopt(model).subscribe((data) => {
      expect(httpSpy).toHaveBeenCalledWith(`testurl.com/api/person/adopt`, model);
      done();
    });
  });
});
