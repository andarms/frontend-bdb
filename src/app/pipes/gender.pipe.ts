import { Pipe, PipeTransform } from '@angular/core';

import { Genders } from '../models/person.model';

@Pipe({
  name: 'bdbGender',
})
export class GenderPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value === Genders.Male) {
      return 'Male';
    }
    if (value === Genders.Female) {
      return 'Female';
    }
    return value;
  }
}
