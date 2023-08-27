import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
imgLogo = '/assets/Logo.svg'
imgMenu = '/assets/Hamburger Menu.svg'
imgMenu1 = '/assets/Hamburger Menu.svg'
imgMenu2 = '/assets/Close.svg'
showSousMenu = true;

ShowDeviceMenu() {
  this.showSousMenu = !this.showSousMenu;
  if(this.showSousMenu){
    this.imgMenu = this.imgMenu1}else{
      this.imgMenu = this.imgMenu2
    }

}

}
