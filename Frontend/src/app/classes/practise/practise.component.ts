import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  config: any;
  subjectFile
  constructor(private data: DataService ) {
    this.subjectFile = this.data.getAllSubject();
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.subjectFile.length
    }
  }

  ngOnInit(): void {
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  downloadPdf() {
    const pdfUrl = '../../../assets/files/Mathematic.pdf';
    const pdfName = 'maths.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
