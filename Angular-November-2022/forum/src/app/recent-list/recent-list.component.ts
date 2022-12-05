import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post';
import { ThemeApiService } from '../theme-api.service';

@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.component.html',
  styleUrls: ['./recent-list.component.scss'],
})
export class RecentListComponent implements OnInit {
  posts: IPost[] | null = null;
  constructor(private api: ThemeApiService) {}
  ngOnInit(): void {
    this.api.getPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: console.error,
      complete: () => {
        this.posts?.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      },
    });
  }
}
