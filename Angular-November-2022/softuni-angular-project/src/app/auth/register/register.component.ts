import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth-shared-styles.scss'],
})
export class RegisterComponent {
  @ViewChild('registerForm') form!: NgForm;
  constructor(private api: ApiService) {}
  submitForm() {
    console.log(this.form.value);

    this.api.post('/users', this.form.value).subscribe({ next: console.log });
  }
}
