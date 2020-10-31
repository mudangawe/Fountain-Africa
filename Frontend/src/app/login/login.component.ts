import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iUser } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: iUser[];
  email: string;
  password: string;
  isLoggedIn: boolean;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }

  // Called when submit button is clicked
  submitBtn() {
    this.login();
  }

  // Logs in user when user is found
  login() {
    for(let user of this.users) {
        if(user.email === this.email && user.password === this.password) {
          this.loginUserSuccessful();
          this.userService.user = user;
        }
    }

    // isLoggedIn set to false when no user is found
    this.isLoggedIn = false;
  }

  // Called when login function is successful
  loginUserSuccessful(): void {
    this.router.navigate(['/dashboard']);
  }
}
