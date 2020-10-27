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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {BooksComponent} from './books/books.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    WelcomeComponent,
    BooksComponent
  ],
  exports:[
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
