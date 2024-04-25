import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = new User();

  constructor(private userService : UserService, private router : Router){}
  
  
  ngOnInit(): void {}

  addUser(){
    this.userService.ajouterUser(this.newUser);
    this.router.navigate(['users']);
  }

}
