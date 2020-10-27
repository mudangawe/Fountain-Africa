import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onApply(){
    this.closeDialog.emit(true)
  }

}
