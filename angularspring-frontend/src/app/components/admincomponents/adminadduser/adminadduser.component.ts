import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../../entity/user-data';
import { UserserviceService } from '../../../service/user-service/userservice.service';

@Component({
  selector: 'app-adminadduser',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './adminadduser.component.html',
  styleUrl: './adminadduser.component.css'
})
export class AdminadduserComponent {
  userList: UserData[] = []

  userData = new UserData('', '', '','','','')
  fetchUserId: undefined;
  
  constructor(private userService: UserserviceService) {}

  // getProductById(): void {
  //   if (this.fetchUserId !== undefined) {
  //     this.userService.getUserById(this.fetchUserId).subscribe(
  //       (data) => {
  //         this.userData = data;
  //       },
  //       (error: any) => {
  //         console.error('Error loading product data:', error);
  //       }
  //     );
  //   }
  // }


  addUser() {
    this.userService
      .addUsers(this.userData)
      .subscribe(() => [
        alert('User added'),
        (this.userData = new UserData('', '', '','','','')),
      ]),
      (error: any) => {
        console.error('Error loading user data:', error)
      }
  }


}
