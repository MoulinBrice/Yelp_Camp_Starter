import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { UsersService } from '../../services/users.service';
import { User } from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  imgLogo = 'assets/Logo.svg';
  imgAvatar = 'assets/User Testimonial.svg';

  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    created_at: new Date(),
    updated_at: new Date()
  };

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });


  constructor(
    private Router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService)    {

   }

   get nameControl() {
    console.log(this.signupForm.get('name'));
    return this.signupForm.get('name');
  }
  get emailControl() {
    return this.signupForm.get('email');
  }
  get passwordControl() {
    return this.signupForm.get('password');
  }



  goback() {
    this.Router.navigate(['/camps']);
  }

  controleOne() {
  }



  onSubmit() {
    console.log(this.signupForm.value);
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.created_at = new Date();
    this.user.updated_at = new Date();
    this.usersService.addUser(this.user).subscribe((user: User) => {
      console.log(user);
      this.Router.navigate(['/camps']);
    });
  }
}
