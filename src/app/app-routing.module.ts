import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CampsComponent } from './pages/camps/camps.component';
import { CampComponent } from './pages/camp/camp.component';
import { ReviewComponent } from './pages/review/review.component';
import { CampNewComponent } from './pages/camp-new/camp-new.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'camps', component: CampsComponent },
  { path: 'camps/:id', component: CampComponent},
  { path: 'camps/:id/review', component: ReviewComponent},
  { path: 'new-camp', component: CampNewComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
