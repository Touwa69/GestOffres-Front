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
  nomUser! :string;
  allUsers! : User[];
  searchTerm!: string;

   constructor(private userService : UserService){
    // this.users = userService.listeUsers();

  }
  
 /* constructor(){
  this.users = [
    {idUser : 1, username: "TouwaAbbassi", password:"123", email : "touwa@gmail.com", societe : "sasLab", roles:['ADMIN']},
    {idUser : 2, username: "AzerArfa", password:"123", email : "azer@gmail.com", societe : "sasLab", roles:['ADMIN']},
    {idUser : 1, username: "Moha20", password:"123", email : "moha@gmail.com", societe : "sasLab", roles:['USER']},
    
  ];
 } */

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.listeUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        error => {
          console.error('Error fetching users', error);
          // Handle error, display error message to the user
        }
      );
  }

  onKeyUp(filterText : string){
    this.users = this.allUsers.filter(item =>
    item.name?.toLowerCase().includes(filterText));
    }

    rechercherUsers(){
      this.userService.rechercherParNom(this.nomUser).
        subscribe(users => {
      this.users = users; 
      console.log(users)});
    }


  supprimerUser(id: string): void{
    console.log(id);
    let conf =confirm("Etes-vous sur ?");
    if (conf)
    this.userService.supprimerUser(id).subscribe(() => {
  this.loadUsers();
    }, (error) => {
      console.error('Error deleting user', error);
    });
  }

}
