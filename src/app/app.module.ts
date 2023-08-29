import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CampsComponent } from './pages/camps/camps.component';
import { CampcardComponent } from './components/campcard/campcard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CampComponent } from './pages/camp/camp.component';
import { CampreviewsComponent } from './components/campreviews/campreviews.component';
import { ReviewComponent } from './pages/review/review.component';
import { CampNewComponent } from './pages/camp-new/camp-new.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CampsComponent,
    CampcardComponent,
    FooterComponent,
    CampComponent,
    CampreviewsComponent,
    ReviewComponent,
    CampNewComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

