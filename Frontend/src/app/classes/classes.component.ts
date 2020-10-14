import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent} from './dialog/dialog.component'
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  chapter = [1,2,3,4,5,6]
  
  config: any;
  collection = [];
  constructor( private data: DataService, private modalService:NgbModal, private activeModal: NgbActiveModal) {
    this.collection = this.data.getSubject();
    console.log(this.collection)
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.collection.length
    }
   }

  ngOnInit(): void {
   
  }
  openDialog(){
    this.modalService.open(DialogComponent,{size:'lg'})
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  tab: any = "tab"
  
  onClick(index)
  {
      if(index==0){
        this.tab = 'subject';
      }else if(index==1){
        this.tab = 'practise';}
      else if(index==2){
        this.tab ="profile";
      } else if(index==3){
         this.tab = "progress"
      }
  }

}
