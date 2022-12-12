import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  validateFields(form: any, isRegister: boolean) {
    const errors: { username: string[]; password: string[]; other: string[] } =
      {
        username: [],
        password: [],
        other: [],
      };
    if (form.invalid) {
      if (form.controls['username'].errors) {
        errors.username = ['Username must be at least 3 characters long'];
      }
      if (form.controls['password'].errors) {
        errors.password = ['Password must be at least 5 characters long!'];
      }
    }
    return errors;
  }
}
