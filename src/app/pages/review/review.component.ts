import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Review } from 'src/app/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
newReview: any;
userId: number=0;
idCamp: number=0;

reviewForm: FormGroup = new FormGroup({
  text: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  rating: new FormControl('',[Validators.required]),
});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewsService: ReviewsService
  ) { }

  ngOnInit(){
    this.newReview = {
      id: 0,
      rating: 0,
      text: '',
      campId: 0,
      userId: 0,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.idCamp = Number(this.route.snapshot.params['id']);
  }

  onSubmit() {
    this.newReview.campId = this.idCamp;
    this.newReview.userId = 1;
    this.newReview.created_at = new Date();
    this.newReview.updated_at = new Date();
    console.log(this.newReview);
    this.reviewsService.createReview(this.newReview).subscribe((review: Review) => {
      this.router.navigate([`/camps/${this.idCamp}`]);
    });
  }
}
