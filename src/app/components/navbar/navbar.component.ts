import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements  OnInit {
imgLogo = '/assets/Logo.svg'
imgMenu = '/assets/Hamburger Menu.svg'
imgMenu1 = '/assets/Hamburger Menu.svg'
imgMenu2 = '/assets/Close.svg'
showSousMenu = true;
yelpUser: any;
userLogedIn = false;
userLogedOut = true;

constructor(private Router: Router,
            private userService:UsersService) { }

ngOnInit() {
  if(this.userService.isLogedInLocalStorage()) {
    this.yelpUser = this.userService.getUserInLocalStorage();
    this.userLogedOut = true;
    this.userLogedIn = false;
  }else{
    this.userLogedIn = true;
    this.userLogedOut = false;
  }
}

ShowDeviceMenu() {
  this.showSousMenu = !this.showSousMenu;
  if(this.showSousMenu){
    this.imgMenu = this.imgMenu1}else{
      this.imgMenu = this.imgMenu2
    }
}

goToSignUp() {
  this.Router.navigate(['/signup']);
}

logOut(){
  this.userService.logOut()
  this.userLogedIn = true;
  this.userLogedOut = false;
  this.Router.navigate(['/camps']);
}

}
