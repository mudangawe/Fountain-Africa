import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fountain Africa';
  tab = "home"
  constructor(private titleService: Title) {
      titleService.setTitle(this.title);
   }
   _opened: boolean = false;
 
  _toggleSidebar(sidebar) {
    this._opened = !this._opened;
  }
  onClick(index)
  {
      if(index==0){
        this.tab = 'home';
      }else if(index==1){
        this.tab = 'classes';}
      else if(index==2){
        this.tab ="library";
      } else if(index==3){
         this.tab = "about"
      } else if(index==4)
      {
        this.tab = "login"
      }
    }
}
