import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Review } from 'src/app/review';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
newReview: any;
userId: number=0;
idCamp: number=0;
isConnected: boolean = false;

reviewForm: FormGroup = new FormGroup({
  reviewText: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
  reviewRating: new FormControl('',[Validators.required]),
});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewsService: ReviewsService,
    private usersService: UsersService
  ) { }

  ngOnInit(){
   this.isConnected = this.usersService.isLogedInLocalStorage();
   if(this.isConnected) {
      this.userId = this.usersService.getUserInLocalStorage().id;
    }else {
      this.router.navigate(['/login']);
    }

    this.idCamp = Number(this.route.snapshot.params['id']);
    this.newReview = {
      id: 0,
      rating: 0,
      text: '',
      campId: 0,
      userId: 0,
      created_at: new Date(),
      updated_at: new Date(),
    };

  }

  onSubmit() {
    if(this.reviewForm.invalid) {
      return;
    }
    this.newReview.campId = this.idCamp;
    this.newReview.rating = this.reviewForm.value.rating;
    this.newReview.text = this.reviewForm.value.text;
    this.newReview.userId = this.userId;
    this.newReview.created_at = new Date();
    this.newReview.updated_at = new Date();
    this.reviewsService.createReview(this.newReview).subscribe((review: Review) => {
      this.router.navigate([`/camps/${this.idCamp}`]);
    });
  }

  get reviewTextControl() {
    return this.reviewForm.get('reviewText');
  }
  get reviewRatingControl() {
    return this.reviewForm.get('reviewRating');
  }

  goback() {
    this.router.navigate([`/camps/${this.idCamp}`]);
  }
}
