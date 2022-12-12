import { Component, Input, OnChanges } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

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
    ]),
  ],
})
export class ErrorComponent implements OnChanges {
  @Input() recievedErrors: Object = {};
  displayErrors: string[] = [];
  constructor() {}
  ngOnChanges(): void {
    this.displayErrors = []
    for (const mess of Object.values(this.recievedErrors)) {
      this.displayErrors?.push(mess);
    }
  }
}
