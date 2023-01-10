import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login = false;
  user = "jari";
  favourite = [ "1", "2" ];

  constructor() {}

  setUser( user ){
    this.login = true;
    return this.user = user;
  }

  getFavourite(){
    return this.favourite;
  }

  removelike(itemId){
    return this.favourite = this.favourite.filter( el => el != itemId);
  }
}
