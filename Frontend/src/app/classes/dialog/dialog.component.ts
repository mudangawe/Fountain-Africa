import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  grades: string[];
  subjects: any[];
  selectedSubject:any[]
  subscription:  Subscription;
  constructor(public activeModal: NgbActiveModal, private data: DataService) {
    this.grades = this.data.getAllGrade();
    this.subjects = this.data.getAllSubject();
    this.subscription = this.data.getSelectedSubject().subscribe(data => this.selectedSubject = data.selectedSubject)
    if(typeof this.selectedSubject == 'undefined')
    {
      this.selectedSubject = [];
    }
   }

  ngOnInit(): void {
  }
  onChange(subject, isChecked:boolean)
  {
    console.log(this.selectedSubject.indexOf(subject))
    if(isChecked && (this.selectedSubject.indexOf(subject) == -1))
    {
      this.selectedSubject.push(subject)
      console.log(subject)
    }
    else if(!isChecked && (this.selectedSubject.indexOf(subject) != -1))
    {
      this.subjects.slice(this.subjects.indexOf(subject),1)
    }
    
  }
  onApply()
  {
    this.data.setSelectedSubject(this.selectedSubject);
    this.activeModal.close();
  }

}
