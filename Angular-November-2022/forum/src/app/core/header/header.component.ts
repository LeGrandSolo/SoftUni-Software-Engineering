import { Component, DoCheck } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { IStateUser } from 'src/app/user/userInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get isLogged() {
    return this.userService.isLogged;
  }
  get username() {
    return this.userService.user?.username;
  }
  constructor(private userService: UserService) {}
}
