import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  imgLogo = 'assets/Logo.svg';
  imgAvatar = 'assets/User Testimonial.svg';

  constructor(private Router: Router) { }
  
  gobak() {
    this.Router.navigate(['/camps']);
  }
}
