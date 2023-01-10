import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

import User from '../../assets/user.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  users;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  warming = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.users = JSON.parse(JSON.stringify(User));
  }

  get f(): any {
    return this.loginForm.controls;
  }

  toForgetPwd(){
  }

  login(){
    if(this.f.username.status == "INVALID" || this.f.password.status == "INVALID")
      return;

    let login = false;

    this.users.forEach(element => {
      if( 
          element.username == this.f.username.value &&
          element.password == this.f.password.value
        ){
          login = true;
        }
    });

    if(login){
      this.userService.setUser(this.f.username.value);
      return this.router.navigate(['/main-page']);
    }
  }
}
