export enum Genders {
  Male = 'M',
  Female = 'F',
}

export interface Person {
  id: number;
  identification: string;
  fullname: string;
  birth: Date;
  gender: Genders;

  // eslint-disable-next-line no-use-before-define
  relatives?: PersonRelatives;
}

export interface PersonRelatives {
  father: Person;
  mother: Person;
  children: Person[];
}

export interface PersonRelativesIds {
  fatherId: number;
  motherId: number;
  childId: number;
}
