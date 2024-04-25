import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users! : User[];
  user! : User;

  constructor() {

    this.users = [
      {idUser : 1, username: "TouwaAbb", password:"123", email : "touwa@gmail.com", societe : "sasLab", roles:['ADMIN'], dateCreationCpt : new Date("2024/04/23")},
      {idUser : 2, username: "Azer01", password:"123", email : "azer@gmail.com", societe : "sasLab", roles:['ADMIN'], dateCreationCpt : new Date("2024/04/23")},
      {idUser : 3, username: "Moha20", password:"123", email : "moha@gmail.com", societe : "sasLab", roles:['USER'], dateCreationCpt : new Date("2024/04/24")},
      
    ];
  }

  listeUsers(): User[]{
    return this.users;
  }

  ajouterUser(user : User){
    this.users.push(user);
  }

  supprimerUser(user : User){
    const index = this.users.indexOf(user, 0);
    if(index > -1){
      this.users.splice(index, 1);
    }
  }

  consulterUser(id: number){
    this.user = this.users.find(usr => usr.idUser == id)!;
    return this.user;
  }

  trierUsers(){
    this.users = this.users.sort( (n1, n2) => {
      if(n1.idUser! > n2.idUser!){
        return 1;
      }if(n1.idUser! < n2.idUser!){
        return -1;
      }
      return 0;
    });
  }

  updateUser(usr: User){
    this.supprimerUser(usr);
    this.ajouterUser(usr);
    this.trierUsers();
  }

  // rechercherParNom(nom: string):Observable< User[]> {
  //   const url = `8081/userssByName/${nom}`;
  //   return this.http.get<User[]>(url);
  //   }


}