import {  Injectable } from '@angular/core';
import { IStateUser } from './userInterface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IStateUser | null = null

  get isLogged(){
    return this.user !== null
  }
}
