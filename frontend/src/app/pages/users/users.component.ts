import { UsersApiService } from './../../services/usersApi.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //declaring user array to store all the users from the api
  users:User|any
  //declaring user id to store the user id and initialize with default id if 0
  userId:number = 0
  // decaring an object to contain user details
  userDetails:User|any

  constructor(private api:UsersApiService) { }

  ngOnInit(): void {
    // calling get all user when the component starts
    this.getAllUsers()
  }
  // funtion to get all the user from the database
  getAllUsers()
  {
    // subscribing to the user api service
    this.api.getUsers().subscribe((users)=>{
      // initilizing the users array to the data returned by the api
      this.users = users
    })

  }
  //funtion to get a user by id
  getUserById(id:number)
  {
    console.log(id)
    this.api.getUserByID(id).subscribe((userDetails)=>{
      this.userDetails = userDetails
    })
  }

}
