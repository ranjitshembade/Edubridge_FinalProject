import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthserviceService, private router: Router) {}

    canActivate(): boolean {
      if (this.authService.isUserLoggedIn()) {
        return true;
      } else {
        // Redirect to the login page if the user is not logged in
        this.router.navigate(['/login']);
        return false;
      }
    }
}