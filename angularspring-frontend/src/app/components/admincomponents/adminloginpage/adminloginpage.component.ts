import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminloginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css'],
})
export class AdminloginpageComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Function to handle admin login
  login() {
    // Hardcoded admin credentials
    const adminCredentials = {
      username: 'admin@example.com',
      password: 'adminpassword',
    };

    // Verify admin credentials
    const isAdmin =
      this.username === adminCredentials.username &&
      this.password === adminCredentials.password;

    if (isAdmin) {
      // Redirect to the admin dashboard or another route
      this.router.navigate(['/admin']);
    } else {
      // Handle incorrect credentials (show an error message, etc.)
      console.log('Incorrect admin credentials');
    }
  }
}
