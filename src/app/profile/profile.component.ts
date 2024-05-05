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
    // this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params['id']);
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    const userId = 'a9692b26-6deb-441f-af48-0eea2fabbb56' ; // Example user ID, replace with the actual user ID
    this.userService.getUserById(userId)
      .subscribe(user => {
        this.currentUser = user;
      });
  }

}
