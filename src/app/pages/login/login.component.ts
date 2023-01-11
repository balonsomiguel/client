import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user = {
    email: '',
    password: ''
  }

  constructor(){}

  ngOnInit(){}

  login(){
    console.log(this.user.email);
    localStorage.setItem('user',JSON.stringify(this.user.email));
  }
}
