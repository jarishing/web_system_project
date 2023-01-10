import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import Data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;

  constructor(
    public userService:UserService
  ) { }

  setData(){
    this.data = JSON.parse(JSON.stringify(Data));
  }

  getData(){
    return this.data;
  }

  setReview(itemId, commentByUser){
    let index = this.data.findIndex( el => el.id == itemId);
    console.log(index);
    if(index > -1){
      this.data[index].review.push({
        id: "a12",
        user: this.userService.user,
        comment: commentByUser,
        rating: 5
      })
    }
  }
}
