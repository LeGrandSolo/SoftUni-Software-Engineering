import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { ErrorService } from 'src/app/shared/error.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth-shared-styles.scss'],
})
export class LoginComponent {
  @ViewChild('loginForm') form!: NgForm;
  errors: { username: string[]; password: string[]; other: string[] } = {
    username: [],
    password: [],
    other: [],
  };
  constructor(
    private api: ApiService,
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  submitForm() {
    this.errors = this.authService.validateFields(this.form, false);
    this.api
      .get('/login', {
        username: this.form.controls['username'].value,
        password: this.form.controls['password'].value,
      })
      .subscribe({
        next: (v) => {
          console.log(v);
          this.router.navigate(['/']);
        },
        error: (err) => {
          if (err.error.code === 101) {
            this.errors.other.push('Incorrect username or password');
          } else {
            this.errors.other.push(`${err.error.message}`);
          }
          return this.errorService.emitErrors(this.errors);
        },
      });
    return null;
  }
}
