import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private userLoggedIn = false;
  private userId: string | null = null; // Add user ID property

  // Set user login status
  setUserLoggedIn(status: boolean, userId: string | null = null): void {
    this.userLoggedIn = status;
    this.userId = userId;
  }

  // Check if the user is logged in
  isUserLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  // Get the logged-in user ID
  getLoggedInUserId(): string | null {
    return this.userId || '';
    console.log(this.userId);
  }

}
