import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  team: any[] = [{fullName:"Ndivhuwo Gift Ramashia", role:'Team Leader'},
                 {fullName:"Mr Mathew", role:'Developer'},
                 {fullName:"Mr Junior", role:'Developer'},
                 {fullName:"Miss Tsakane", role:'Developer'}]
  constructor() { }

  ngOnInit(): void {
  }

  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
