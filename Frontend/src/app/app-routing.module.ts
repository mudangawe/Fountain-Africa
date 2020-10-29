import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'library' , component:LibraryComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
