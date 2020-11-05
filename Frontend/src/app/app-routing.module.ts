import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component';
import {ClassesComponent} from './classes/classes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ClassComponent } from './classes/subjects/class/class.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent},
  { path: 'class', component:ClassComponent},
  { path: 'library' , component:LibraryComponent },
  { path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'library' , component:LibraryComponent },
  { path: 'classes', component: ClassesComponent},
  { path: 'class', component:ClassComponent},
  { path: 'welcome',component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }