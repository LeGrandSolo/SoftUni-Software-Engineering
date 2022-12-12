import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  setUserData(data: { username: string; email: string; sessionToken: string }) {
    const ursData = {
      username: data.username,
      email: data.email,
      sessionToken: data.sessionToken,
    };
    localStorage.setItem('userData', JSON.stringify(ursData));
  }
  getUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      console.log(JSON.parse(userData))
      return JSON.parse(userData);
    }
    return userData;
  }
}
