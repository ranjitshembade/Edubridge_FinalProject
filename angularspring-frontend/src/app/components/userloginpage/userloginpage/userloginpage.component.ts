import { Component } from '@angular/core';
import { UserserviceService } from '../../../service/user-service/userservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../../../service/auth-service/authservice.service';
import { Router, RouterModule } from '@angular/router';
import { UserData } from '../../../entity/user-data';

@Component({
  selector: 'app-userloginpage',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './userloginpage.component.html',
  styleUrl: './userloginpage.component.css'
})
export class UserloginpageComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserserviceService, private authService: AuthserviceService, private router: Router) {}

  userLogin(): void {
    // Fetch user by email (assuming email is unique in your system)
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      const user = users.find(
        (u: { uEmail: string; uPassword: string }) =>
          u.uEmail === this.email && u.uPassword === this.password
      );

      if (user) {
        // Convert user ID to string before setting user login status
        this.authService.setUserLoggedIn(true, user.uId.toString());
        console.log('Login successful!');
        this.router.navigate(['/userloggedindashboard']);
      } else {
        console.log('Invalid credentials');
      }
    });
  }
}
