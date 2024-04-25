import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  currentUser = new User();

  constructor(private activatedRoute : ActivatedRoute,private router : Router , private userService : UserService){}



  ngOnInit(): void {
    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentUser);
  }

  updateUser(){
this.userService.updateUser(this.currentUser);
this.router.navigate(['users'])
}

}
