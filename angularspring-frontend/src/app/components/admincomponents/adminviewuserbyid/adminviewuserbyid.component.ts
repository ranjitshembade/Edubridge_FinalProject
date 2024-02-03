import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../../entity/user-data';
import { UserserviceService } from '../../../service/user-service/userservice.service';

@Component({
  selector: 'app-adminviewuserbyid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adminviewuserbyid.component.html',
  styleUrl: './adminviewuserbyid.component.css'
})
export class AdminviewuserbyidComponent {
  
  userList: UserData[] = []

  userData = new UserData('', '', '','','','')
  fetchUserId: undefined;


  constructor(private userService: UserserviceService) {}


getUserById(): void {
    if (this.fetchUserId !== undefined) {
      this.userService.getUserById(this.fetchUserId).subscribe(
        (data) => {
          this.userData = data;
        },
        (error: any) => {
          console.error('Error loading User data:', error);
        }
      );
    }
  }

}
