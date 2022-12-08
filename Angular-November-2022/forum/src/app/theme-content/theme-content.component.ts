import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../interfaces/post';
import { ITheme } from '../interfaces/theme';
import { ThemeApiService } from '../theme-api.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss'],
})
export class ThemeContentComponent implements OnInit {
  theme: ITheme | null = null;
  get posts (){
    return this.theme?.posts
  }
  get userId(){
    return this.userService.user?.id || ''
  }
  get isLogged(){
    return this.userService.isLogged
  }
  constructor(private route: ActivatedRoute, private api: ThemeApiService, private userService : UserService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.api.getThemeById(id).subscribe({
      next: (value) => {
        this.theme = value;
      },
    });
  }
}
