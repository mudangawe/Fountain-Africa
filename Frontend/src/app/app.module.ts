import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {ClassesComponent} from './classes/classes.component'
import {WelcomeComponent } from './welcome/welcome.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogComponent } from './classes/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    ClassesComponent,
    WelcomeComponent,
    DialogComponent
  ],
 
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
