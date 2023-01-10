import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import Data from '../../assets/data.json';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  data;

  constructor(
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(Data));
  }

  getFavourite(){
    let favourite = this.userService.getFavourite();

    let arr = [];
    favourite.forEach( el => {
      arr.push(this.data.find( item => item.id == el ));
    })

    return arr;
  }

  gotoItemDetail( itemId){
    return this.router.navigate(['/item-detail',itemId]);
  }
}
