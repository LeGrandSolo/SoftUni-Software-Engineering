import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('showErrors', [
      transition(':enter', [
        style({ transform: 'translateX(20%)', opacity: 0 }),
        animate('0.5s', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('0.5s', style({ transform: 'translateX(20%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ErrorComponent implements OnInit {
  recievedErrors: Object = {};
  displayErrors: string[] = [];
  constructor(private errorService: ErrorService) {}
  ngOnInit(): void {
    this.errorService.errorObservable.subscribe({
      next: (err: Object) => {
        this.recievedErrors = err;
        for (const mess of Object.values(this.recievedErrors)) {
          this.displayErrors?.push(mess);
        }
        setTimeout(() => {
          this.displayErrors = [];
          this.recievedErrors = {};
        }, 4000);
      },
    });
  }
}
