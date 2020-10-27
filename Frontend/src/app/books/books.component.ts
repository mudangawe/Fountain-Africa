import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  chooses = {
    all: true,
    books: false,
    talks: false
  };
  tab: string = "all";
  searchInput: string;
  constructor() { }

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
  }

}
