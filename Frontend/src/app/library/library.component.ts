import { Component, OnInit, ViewChild } from '@angular/core';
import {DragScrollComponent} from 'ngx-drag-scroll'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  tab: string = "all";
  searchInput: string;
  public itemsPerSlide = 3;
  public singleSlideOffset = false;
  public noWrap = false;
  public cycleInterval = 3000;
  public slides = [
      {image: '../../assets/images/explore/books.jpg'},
      {image: '../../assets/images/explore/challenge.jpg'},
      {image: '../../assets/images/explore/books.jpg'},
      {image: '../../assets/images/explore/books.jpg'},
      {image: '../../assets/images/explore/books.jpg'},
      {image: '../../assets/images/explore/books.jpg'}
    ];
  constructor() { 
  }

  ngOnInit(): void {
  
  }
  onChange(index:Number)
  {
    if(index == 0)
    {
      this.tab = "all";
    }
    else if(index == 1)
    {
      this.tab = 'books'
    }
    else if(index == 2)
    {
      this.tab = "talks";
    } 
    else if(index==3)
    {
      this.tab = "blogs";
    }
  }

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }
 
  moveRight() {
    this.ds.moveRight();
  }
 
  moveTo(index) {
    this.ds.moveTo(index);
  }
 

}
