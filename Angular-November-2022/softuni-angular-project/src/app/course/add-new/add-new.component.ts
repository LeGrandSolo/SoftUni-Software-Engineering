import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { ErrorService } from 'src/app/shared/error.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent {
  options: { name: string; value: string }[] = [
    { name: 'Maths', value: 'maths' },
    { name: 'Biology', value: 'biology' },
    { name: 'Science', value: 'science' },
    { name: 'Literature', value: 'literature' },
    { name: 'Music', value: 'music' },
    { name: 'Art', value: 'art' },
    { name: 'Physical', value: 'phisical' },
  ];
  @ViewChild('courseForm') form!: NgForm;
  @ViewChild('topics') topics!: NgModelGroup;
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private router: Router,
    private errorService: ErrorService,
    private auth: AuthService
  ) {}
  submitForm() {
    const topics = [];
    const value: {
      name: string;
      description: string;
      price: string;
      imageUrl: string;
      topics: {};
      creator: {};
      boughtUsers: [];
    } = this.form.value;
    const checked = Object.entries(value['topics']).filter((entry) => entry[1]);
    for (const entry of checked) {
      if (entry[0] !== 'other') {
        for (let option of this.options) {
          if (option.value === entry[0]) {
            topics.push(option.name);
          }
        }
      } else {
        topics.push(entry[1]);
      }
    }
    value.topics = topics;
    value.boughtUsers = [];
    let user: { objectId: string };
    this.auth.getCurrentUser().subscribe({
      next: (v: any) => {
        user = {
          objectId: v.objectId,
        };
        value.creator = {
          __type: 'Pointer',
          className: '_User',
          objectId: user.objectId,
        };
        console.log(value);
        this.api.post('/classes/Course', value).subscribe({
          next: (v: any) => {
            this.router.navigate(['/all-courses']);
          },
          error: (err: any) => {
            this.errorService.emitErrors({ others: [err.error.error] });
          },
        });
      },
      error: () => {
        this.errorService.emitErrors({ others: ['Invalid session'] });
        localStorage.removeItem('userData');
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
