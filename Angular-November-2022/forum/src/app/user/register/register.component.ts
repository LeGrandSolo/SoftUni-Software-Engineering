import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}
  register(event: Event) {
    event.preventDefault();
    this.userService.user = { username: 'JohnShmoe', password: '1234', id:'5fa64b162183ce1728ff371d' };
    this.router.navigate(['/']);
  }
}
