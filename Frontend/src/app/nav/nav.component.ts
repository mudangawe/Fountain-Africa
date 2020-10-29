import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  tab: any;
  constructor() { }
  @Output() toggleSidebar = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  OnClick(index)
  {
    
  }
  sidebar()
  {
    this.toggleSidebar.emit(true);
    console.log(false)
  }
  
}
