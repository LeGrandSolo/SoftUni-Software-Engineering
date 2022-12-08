import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ITheme } from '../interfaces/theme';
import { ThemeApiService, } from '../theme-api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themes: ITheme[] | null = null;
  get isLogged() {
    return this.userService.isLogged;
  }
  hasSubscribed = false;
  get userId (){
    return this.userService.user?.id || ''
  } 
  constructor(private api: ThemeApiService, private userService: UserService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (value) => {
        this.themes = value;
      },
      error: console.error,
      complete: () => {
        this.themes?.sort(
          (a, b) => b.subscribers.length - a.subscribers.length
        );
      },
    });
  }
}
