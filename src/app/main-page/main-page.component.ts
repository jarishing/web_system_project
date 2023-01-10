import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import Category from '../../assets/category.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  categories;
  data;

  constructor(
    private router: Router,
    public dataService:DataService
  ) { }

  ngOnInit(): void {
    this.categories = Category;
    this.data = this.dataService.getData().sort((a,b) => a.review.length - b.review.length);

    // this.data = this.dataService.getData().sort((a,b) => a.review.length - b.review.length);
  }

  selectItem( itemId ){
    return this.router.navigate(['/item-detail',itemId]);
  }

  gotoList(){
    return this.router.navigate(['/list']);
  }

}
