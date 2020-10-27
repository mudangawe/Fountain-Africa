import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DialogComponent} from  '../../dialog/dialog.component'
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  subjectFile: any[]
  constructor(private data: DataService, private modelService: NgbModal) {
    this.subjectFile = this.data.getAllSubject();
   }

  ngOnInit(): void {
  }
  openDialog()
  {
    const popupRef = this.modelService.open(DialogComponent,{size:'lg'});
    popupRef.componentInstance.video = true;
  }
  openDialogQuestion()
  {
    const popupRef = this.modelService.open(DialogComponent,{size:'lg'});
    popupRef.componentInstance.question = true;
  }

}
