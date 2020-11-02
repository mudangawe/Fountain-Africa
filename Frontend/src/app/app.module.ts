import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WelcomeComponent} from './welcome/welcome.component'
import {SidebarModule} from 'ng-sidebar'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
