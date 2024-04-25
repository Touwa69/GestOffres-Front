import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser = new User();

  users! : User[];

  constructor(private activatedRoute : ActivatedRoute, private userService : UserService){}

  
  ngOnInit(): void {
    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params['id']);
  }

}
