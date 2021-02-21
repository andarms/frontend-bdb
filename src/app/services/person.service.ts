import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PersonRelatives } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(@Inject('BACKEND_URL') private backednUrl: string, private http: HttpClient) {}

  private get _endpoint() {
    return `${this.backednUrl}/api/person`;
  }

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this._endpoint);
  }

  find(id: number | string): Observable<Person> {
    return this.http.get<Person>(`${this._endpoint}/${id}`);
  }

  create(person: Person) {
    return this.http.post(this._endpoint, person);
  }

  adopt(relativesIds: PersonRelatives) {
    return this.http.post(`${this._endpoint}/adopt`, relativesIds);
  }
}
