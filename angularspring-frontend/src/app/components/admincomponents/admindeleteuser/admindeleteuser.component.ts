import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../../entity/user-data';
import { UserserviceService } from '../../../service/user-service/userservice.service';

@Component({
  selector: 'app-admindeleteuser',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admindeleteuser.component.html',
  styleUrl: './admindeleteuser.component.css'
})
export class AdmindeleteuserComponent {
  userList: UserData[] = []

  userData = new UserData('', '', '','','','')
  fetchUserId: undefined;

  constructor(private userService: UserserviceService) {}

  getAllUsers(): void {
    this.userService
      .getAllUsers()
      .subscribe((data) => [(this.userList = data), console.log(data)]),
      (error: any) => {
        console.error('Error loading user data:', error)
      }
  }

  deleteUser(): void {
    if (this.fetchUserId !== undefined) {
        this.userService.deleteUserById(this.fetchUserId).subscribe(
            () => {
                alert('User deleted');
                this.getAllUsers(); // Assuming you have a method to fetch all products
                this.userData = new UserData('', '', '', '', '','');
            },
            (error: any) => {
                console.error('Error deleting user data:', error);
            }
        );
    }
}
}
