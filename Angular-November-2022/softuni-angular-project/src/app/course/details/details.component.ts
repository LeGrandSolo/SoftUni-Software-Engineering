import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';
import { ErrorService } from 'src/app/shared/error.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  isLogged = false;
  isOwner = false;
  user: { objectId: string } | null = null;
  course: {
    createdAt: string;
    description: string;
    imageUrl: string;
    name: string;
    creator: { objectId: string };
    objectId: string;
    price: number;
  } | null = null;
  creator: { username: string; objectId: string } | null = null;
  id: string = this.activatedRoute.snapshot.params['id'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService,
    private errorService: ErrorService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe({
      next: (v: any) => {
        this.user = {
          objectId: v.objectId,
        };
        this.api.getById('/classes/Course', { objectId: this.id }).subscribe({
          next: (v: any) => {
            this.course = v.results[0];
            this.api.get(`/users/${this.course?.creator.objectId}`).subscribe({
              next: (v: any) => {
                this.creator = v;
                if (v.objectId === this.user?.objectId) {
                  this.isOwner = true;
                }
                this.isLogged = true;
              },
            });
          },
        });
      },
      error: () => {
        this.api.getById('/classes/Course', { objectId: this.id }).subscribe({
          next: (v: any) => {
            this.course = v.results[0];
            this.api.get(`/users/${this.course?.creator.objectId}`).subscribe({
              next: (v: any) => {
                this.creator = v;
              },
            });
          },
        });
      },
    });
  }
  delete() {
    this.auth.getCurrentUser().subscribe({
      next: (v: any) => {
        if (v.objectId === this.course?.creator.objectId) {
          this.api
            .delete(`/classes/Course/${this.course?.objectId}`)
            .subscribe({
              next: () => {
                this.router.navigate(['/courses/all-courses']);
              },
              error: (err) => {
                console.log(err.error.error);

                this.errorService.emitErrors({ others: err.error.error });
                this.router.navigate(['/courses/all-courses']);
              },
            });
        }
      },
    });
  }
}
