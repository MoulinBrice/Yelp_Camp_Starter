import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { UsersService } from '../../services/users.service';
import { User } from '../../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  imgLogo = 'assets/Logo.svg';
  imgAvatar = 'assets/User Testimonial.svg';
  imgClose = 'assets/Close.svg';
  showMessageFlash = false;
  flashMessage = '';

  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  signinForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('',[Validators.required])
  });

  constructor(
    private Router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService)    {

   }

  get emailControl() {
    return this.signinForm.get('email');
  }
  get passwordControl() {
    return this.signinForm.get('password');
  }

   goback() {
    this.Router.navigate(['/camps']);
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.user.email = this.signinForm.value.email;
      this.user.password = this.signinForm.value.password;

      

      // this.usersService.getUser(this.user.email).subscribe(
      //   (user:User[]|any) => {
      //     if (user.length > 0) {
      //       if (user[0].password === this.user.password) {
      //         this.Router.navigate(['/camps']);
      //       } else {
      //         alert('Password incorrect');
      //       }
      //     } else {
      //       alert('User not found');
      //     }
      //   }
      // );
    }
  }

  resetForm() {
    this.showMessageFlash = false;
    this.signinForm.reset();
  }

  isLogedInLocalStorage() {
    localStorage.getItem('yelpUser')?  true :  false;
  }

  getInLocalStorage() {

  }


}
