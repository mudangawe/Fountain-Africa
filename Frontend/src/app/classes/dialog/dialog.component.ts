import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() video: boolean;
  @Input() public subject;
  @Input() public question;
  constructor(public activeModal: NgbActiveModal) {
   }

  ngOnInit(): void {
    console.log(this.subject)
  }
  closeDialog(input)
  {
    this.activeModal.close();
  }
  
}
