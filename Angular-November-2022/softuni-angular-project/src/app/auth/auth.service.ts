import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}
  validateFields(form: any, isRegister: boolean) {
    const errors: {
      username: string[];
      email: string[];
      password: string[];
      other: string[];
    } = {
      username: [],
      email: [],
      password: [],
      other: [],
    };
    if (form.invalid) {
      if (form.controls['username'].errors) {
        errors.username.push('Username must be at least 3 characters long');
      }
      if (form.controls['password'].errors) {
        errors.password.push('Password must be at least 5 characters long!');
      }
      if (isRegister) {
        if (form.controls['email'].errors) {
          errors.password.push('Email must be a valid one!');
        }
      }
    }
    return errors;
  }
  setUserData(
    data: { username: string; email: string; sessionToken: string },
    isRegister: boolean
  ) {
    let userData;
    if (isRegister) {
      userData = this.getCurrentUser(data)
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      userData = {
        username: data.username,
        email: data.email,
        sessionToken: data.sessionToken,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }
  getUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    }
    return userData;
  }
  getCurrentUser(localStorageData:any){
    let userData = {}
    this.api.get('/users/me', null, localStorageData.sessionToken).subscribe({
      next: (v: any) => {
        userData = {
          username: v.username,
          email: v.email,
          sessionToken: v.sessionToken,
        };
        return userData
      },
    });
  }
}