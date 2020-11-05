import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {LibraryComponent} from './library/library.component';
import{DragScrollModule} from 'ngx-drag-scroll'
import {ClassesComponent} from './classes/classes.component'
import {WelcomeComponent } from './welcome/welcome.component';
import { DialogComponent } from './classes/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectsComponent } from './classes/subjects/subjects.component';
import { PractiseComponent } from './classes/practise/practise.component';
import { ClassComponent } from './classes/subjects/class/class.component';
import { VideoComponent } from './classes/dialog/video/video.component';
import { QuestionsComponent } from './classes/dialog/questions/questions.component';
import { SubjectComponent } from './classes/dialog/subject/subject.component'
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    WelcomeComponent,
    ClassesComponent,
    DialogComponent,
    SubjectsComponent,
    PractiseComponent,
    ClassComponent,
    VideoComponent,
    QuestionsComponent,
    SubjectComponent,
    LibraryComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    DragScrollModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
