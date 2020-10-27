import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

import {Subscription} from 'rxjs';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  subscription: Subscription;
  config: any;
  subjectSelected = [];
  constructor( private data: DataService) {
    this.subscription = this.data.getSelectedSubject().subscribe(data => this.subjectSelected = data.selectedSubject);
    if(typeof this.subjectSelected == 'undefined')
    {
       this.subjectSelected = []
    }
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.subjectSelected.length
    }
   }

  ngOnInit(): void {
   
  }
 
  tab: any = "tab";
  subject:boolean = true;
  practise:boolean;
  onClick(index)
  {
      if(index==0){
        this.tab = 'subject';
        this.subject = true;
        this.practise = false;
      }else if(index==1){
        this.subject = false;
        this.practise = true;
        this.tab = 'practise';}
      else if(index==2){
        this.tab ="profile";
      } else if(index==3){
         this.tab = "progress"
      }
  }

}
