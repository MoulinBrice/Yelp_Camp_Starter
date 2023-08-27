import { Component, Input, OnInit } from '@angular/core';

import { Camp } from 'src/app/camp';
import { Review } from 'src/app/review';
import { ReviewsService } from 'src/app/services/reviews.service';

 interface ReviewUser {
  review: Review;
  user: {
    username: string;
  };
 }

@Component({
  selector: 'app-campreviews',
  templateUrl: './campreviews.component.html',
  styleUrls: ['./campreviews.component.scss']
})
export class CampreviewsComponent implements OnInit {
  ReviewsUser: ReviewUser[] | any;
  isRated:number = 0
  urlNewReview: string=""

  @Input() idCamp: number | any;

  constructor(private ReviewsService: ReviewsService) { }


  ngOnInit() {

   this.ReviewsService.getCampReviewsUser(this.idCamp).subscribe((reviews: ReviewUser[]|void) => {
    this.ReviewsUser = reviews;
    console.log(this.ReviewsUser);
    this.urlNewReview = `/camps/${this.idCamp}/review`

    })
  }



}
