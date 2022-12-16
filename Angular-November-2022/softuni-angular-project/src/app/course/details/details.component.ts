import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  course: {
    createdAt: string;
    description: string;
    imageUrl: string;
    name: string;
    creator: { objectId: string };
    price: number;
  } | null = null;
  creator: { username: string,objectId:string } | null = null;
  id: string = this.activatedRoute.snapshot.params['id'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}
  ngOnInit(): void {
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
  }
}
