import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorsSub$ = new BehaviorSubject({});
  constructor() {}
  emitErrors(errors: Object) {
    this.errorsSub$.next(errors);
  }
}
