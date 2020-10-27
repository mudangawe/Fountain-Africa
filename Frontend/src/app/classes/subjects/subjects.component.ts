import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent} from '../dialog/dialog.component';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
  config: any;
  @Input() subjectSelected: any[];
  
  constructor( private modalService:NgbModal ) {
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

  openDialog(){
    const popupReference = this.modalService.open(DialogComponent,{size:'lg'})
    popupReference.componentInstance.subject = true;
  }
  
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit(): void {
  }

}
