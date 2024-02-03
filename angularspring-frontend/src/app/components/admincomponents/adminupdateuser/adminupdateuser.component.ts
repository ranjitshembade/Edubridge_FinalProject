import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../../../service/user-service/userservice.service';

@Component({
  selector: 'app-adminupdateuser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminupdateuser.component.html',
  styleUrl: './adminupdateuser.component.css'
})
export class AdminupdateuserComponent {
  userData: any = {};

  constructor(private UserService: UserserviceService) { }

  updateUserById(): void {
    const userId = this.userData.uId;
    this.UserService.getUserById(userId).subscribe(
      (existingUser) => {
        // Update the existing product with the new data
        existingUser.uName = this.userData.uName;
        existingUser.uEmail = this.userData.uEmail;
        existingUser.uContact = this.userData.uContact;
        existingUser.uAddress = this.userData.uAddress;
        existingUser.uPassword = this.userData.uPassword;

        // Call the UserService to update the product
        this.UserService.updateUserById(userId, existingUser).subscribe(
          () => {
            alert('User updated');
            // Assuming you have a method to fetch all products
            // this.getAllProducts();
            this.userData = {};
          },
          (error: any) => {
            console.error('Error updating user data:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error fetching product data:', error);
      }

    );

  }
}