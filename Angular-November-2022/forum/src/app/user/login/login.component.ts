import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  login(event:Event) {
    event.preventDefault()
    this.userService.user = { username: 'JohnShmoe', password: '1234', id:'5fa64b162183ce1728ff371d' };
    this.router.navigate(["/"])
  }
}
