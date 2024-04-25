import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users! : User[];

   constructor(private userService : UserService){
    this.users = userService.listeUsers();

  } 
  
 /* constructor(){
  this.users = [
    {idUser : 1, username: "TouwaAbbassi", password:"123", email : "touwa@gmail.com", societe : "sasLab", roles:['ADMIN']},
    {idUser : 2, username: "AzerArfa", password:"123", email : "azer@gmail.com", societe : "sasLab", roles:['ADMIN']},
    {idUser : 1, username: "Moha20", password:"123", email : "moha@gmail.com", societe : "sasLab", roles:['USER']},
    
  ];
 } */

  ngOnInit(): void {}

  

  supprimerUser(usr: User){
    //console.log(j);
    let conf =confirm("Etes-vous sur ?");
    if (conf)
    this.userService.supprimerUser(usr);
  }

  

  

}
