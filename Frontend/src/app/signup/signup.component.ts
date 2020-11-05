import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { iUser } from '../shared/interfaces/user';

// Services
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: iUser = {
    name: '',
    surname: '',
    email: '',
    phone: undefined,
    password: ''
  };

  isSignedUp: boolean;

  constructor(private userService: UserService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.createUser();
    console.log('Submit Buton Clicked');
  }

  createUser(): void {
    if(this.user.name != '' &&
       this.user.surname != '' &&
       this.user.email != '' &&
       this.user.password != '') {

      this.userService.setUser(this.user);
      this.userService.user = this.user;

      this.createUserSuccessful();

      console.log(this.userService.getUsers());
    }

    this.isSignedUp = false;
  }

  // Route to dashboard when user is successful
  createUserSuccessful() {
    this.router.navigate(['/dashboard']);
  }
}
