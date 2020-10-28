import { Component, OnInit } from '@angular/core';

// Interface
import { Signup } from '../shared/interfaces/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Signup = {
    name: '',
    surname: '',
    email: '',
    phone: undefined,
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.user);
  }
}
