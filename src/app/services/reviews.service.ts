import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http';

 import { Review } from '../review';

 interface ReviewUser {
  review: Review;
  user: {
    username: string;
  };
 }


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

reviewsUser: ReviewUser[] | any;

  constructor(private http: HttpClient) { }

  getCampReviewsUser(campId: number|any): Observable<ReviewUser[]|void> {
    return this.http.get<ReviewUser[]|void>(`http://localhost:3000/reviews?campId=${campId}&_expand=user`).pipe(
      map((reviews: ReviewUser[]|void) => {
        return reviews}))
  }

  //CREATE
  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>('http://localhost:3000/reviews', review);
  }
}
