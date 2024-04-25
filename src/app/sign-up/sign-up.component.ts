import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  captcha : string;
  login : string;
  newUser = new User();

  constructor(private userService : UserService, private router : Router){
    this.captcha='';
    this.login='Sign-Up';
  }


  ngOnInit(): void {}

  resolved(captchaResponse : string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response:  '+ this.captcha);
  }

  addUser(){
    this.userService.ajouterUser(this.newUser);
    this.router.navigate(['home']);
  }

}
