import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { iUser } from 'src/app/shared/interfaces/user';

// Services
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfileComponent implements OnInit {

  user: iUser;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userService.user) {
      this.user = this.userService.user;
    } else {
      // When user is undefined, navigate to login page
      this.router.navigate(['/login']);
    }
  }

}
