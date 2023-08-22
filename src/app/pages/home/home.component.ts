import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

imgLogo = 'assets/Logo.svg';
partneredList = [
  "/assets/Airbnb.svg",
  "/assets/Booking.svg",
  "/assets/Plum Guide.svg"
]
imgHomeScreen = "/assets/Hero Image.jpg"
imgHomeMobTab = "/assets/Hero Image mobtab.jpg"

}
