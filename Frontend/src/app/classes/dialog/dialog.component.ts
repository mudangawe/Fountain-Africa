import { Component, OnInit } from '@angular/core';
import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
