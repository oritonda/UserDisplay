import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
url = environment.apiUrl;
  constructor(private http:HttpClient) { }
  // fuction to get all users
  getUsers()
  {
    return this.http.get(`${this.url}`)
  }
  // function to get a user by user's id 
  getUserByID(userId:number)
  {
    return this.http.get(`${this.url}/userId`)
  }
}
