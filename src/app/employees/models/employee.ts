export enum Gender {
  Male,
  Female,
}

export interface Empoyee {
  email: string;
  mobile: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: Gender;
  address1: string;
  address2: string;
  city: string;
  postal: number;
  country: string;
  active: boolean;
}
