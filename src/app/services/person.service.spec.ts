import { TestBed } from '@angular/core/testing';

import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'BACKEND_URL', useValue: 'testurl.com' }],
    });
    service = TestBed.inject(PersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get person list', () => {
    expect(service).toBeTruthy();
  });

  it('should get single person', () => {
    expect(service).toBeTruthy();
  });

  it('should create person', () => {
    expect(service).toBeTruthy();
  });

  it('should adopt person', () => {
    expect(service).toBeTruthy();
  });
});
