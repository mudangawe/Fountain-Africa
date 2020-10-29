import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {WelcomeComponent } from './welcome/welcome.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {LibraryComponent} from './library/library.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{DragScrollModule} from 'ngx-drag-scroll'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    WelcomeComponent,
    LibraryComponent
  ],
  exports:[
    WelcomeComponent,
    LibraryComponent
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    DragScrollModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
