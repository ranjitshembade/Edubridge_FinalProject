import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../entity/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/getUsers`);
  }

  getUserById(userId: number): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/users/${userId}`);
  }

  addUsers(userData: UserData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/addUsers`, userData);
  }

  updateUserById(userId: number, updatedUser: UserData): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${userId}`, updatedUser);
  }

  deleteUserById(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${userId}`);
  }
}
