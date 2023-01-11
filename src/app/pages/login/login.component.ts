import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){}

  login(){
    this.authService.consultarCliente(this.user).subscribe({
      next: (v) => (this.router.navigate(['/catalogo'])),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
    localStorage.setItem('user',JSON.stringify(this.user.email));
  }

}
