import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/core/api.service';
import { ErrorService } from 'src/app/shared/error.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  isLogged = false
  isOwner = false;
  user: {objectId:string} | null = null;
  course: {
    createdAt: string;
    description: string;
    imageUrl: string;
    name: string;
    creator: { objectId: string };
    price: number;
  } | null = null;
  creator: { username: string; objectId: string } | null = null;
  id: string = this.activatedRoute.snapshot.params['id'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService,
    private errorService: ErrorService
  ) {}
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe({
      next: (v: any) => {
        this.user = {
          objectId: v.objectId,
        };
        this.isLogged = true
        this.api.getById('/classes/Course', { objectId: this.id }).subscribe({
          next: (v: any) => {
            this.course = v.results[0];
            this.api.get(`/users/${this.course?.creator.objectId}`).subscribe({
              next: (v: any) => {
                this.creator = v;
                if(v.objectId === this.user?.objectId){
                  this.isOwner = true
                }
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
}
