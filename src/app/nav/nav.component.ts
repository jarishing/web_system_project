import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(
    private router: Router,
    public userService:UserService
  ) { }

  ngOnInit(): void {}


  backToMain( ){
    return this.router.navigate(['/main-page']);
  }

  userPage(){
    if(this.userService.login){
      return this.router.navigate(['/favourite']);
    }else{
      return this.router.navigate(['/login']);
    }
  }
}
