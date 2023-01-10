import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Data from '../../assets/data.json';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  data;
  form: FormGroup;

  loginForm = this.fb.group({
    review: [''],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public userService:UserService,
    public dataService:DataService
  ) { }

  ngOnInit(): void {
    let itemId = this.activatedRoute.snapshot.params.itemId;
    this.refreshData(itemId);
    // this.data = this.dataService.getData().find( item => item.id == itemId);
  }

  refreshData(itemId){
    this.data = this.dataService.getData().find( item => item.id == itemId);
  }

  get f(): any {
    return this.loginForm.controls;
  }

  checkFavourite( itemId ){
    return this.userService.favourite.some( el => el == itemId );
  }
  
  dislike( itemId ){
    return this.userService.removelike(itemId);
  }

  like( itemId ){
    return this.userService.favourite.push(itemId);
  }

  submitComment( itemId ){
    if(this.f.review.value == '') return;

    this.dataService.setReview( itemId,this.f.review.value );
    this.refreshData(itemId);
  }


}
