import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ITheme } from '../interfaces/theme';
import { ThemeApiService } from '../theme-api.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themes: ITheme[] | null = null;
  constructor(private api: ThemeApiService) {}
  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (value) => {
        this.themes = value;
      },
      error: console.error,
      complete: () => {
        this.themes?.sort((a,b)=> b.subscribers.length - a.subscribers.length);
      },
    });
  }
}
