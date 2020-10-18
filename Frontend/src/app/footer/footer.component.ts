import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email = 'hello@fountainafrica.org';
  phone = '021 ### 0000';
  address = {
    street: '1A on Broadway',
    surburb: 'City Centre',
    city: 'Pretoria',
    postalCode: '4598'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
