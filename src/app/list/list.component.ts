import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';

import Category from '../../assets/category.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data;
  selectedCategory = "ALL";
  categories;

  constructor(
    private router: Router,
    public userService:UserService,
    public dataService:DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    this.categories = Category;
  }

  selectCategory(category){
    this.selectedCategory = category;
    if(category == "ALL"){
      this.data = this.dataService.getData();
    }else{
      this.data = this.dataService.getData().filter(
        recipe => recipe.category == category
      )
    }
  }

  selectItem( itemId ){
    return this.router.navigate(['/item-detail',itemId]);
  }

  checkFavourite( itemId ){
    return this.userService.favourite.some( el => el == itemId );
  }
}
