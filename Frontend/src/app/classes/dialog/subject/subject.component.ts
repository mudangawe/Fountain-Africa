import { Component,EventEmitter ,OnInit, Output } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  grades: string[];
  subjects: any[];
  selectedSubject:any[]
  subscription:  Subscription;
  constructor( private data: DataService) {
    this.grades = this.data.getAllGrade();
    this.subjects = this.data.getAllSubject();
    this.subscription = this.data.getSelectedSubject().subscribe(data => this.selectedSubject = data.selectedSubject);
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
    this.onClose();
  }
  onClose()
  {
    this.closeDialog.emit(true);
  }


}
