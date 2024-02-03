import { Component } from '@angular/core';
import { UserData } from '../../../entity/user-data';
import { UserserviceService } from '../../../service/user-service/userservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adminviewuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminviewuser.component.html',
  styleUrl: './adminviewuser.component.css'
})
export class AdminviewuserComponent {
  userList: UserData[] = []

  userData = new UserData('', '', '','','','')

  constructor(private userService: UserserviceService) {}

  getAllUsers(): void {
    this.userService
      .getAllUsers()
      .subscribe((data) => [(this.userList = data), console.log(data)]),
      (error: any) => {
        console.error('Error loading User data:', error)
      }
  }
}
