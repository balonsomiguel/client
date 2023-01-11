import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void{}

  registrarCliente(){
    this.authService.registrarCliente(this.user).subscribe({
      next: (v) => (this.router.navigate(['/catalogo'])),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  /*
  verificarPasswords(){
    // Obtenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
      // Si las constraseñas no coinciden mostramos un mensaje
      document.getElementById("error").classList.add("mostrar");
      return false;
    } else {
      // Si las contraseñas coinciden ocultamos el mensaje de error
      document.getElementById("error").classList.remove("mostrar");
      // Mostramos un mensaje mencionando que las Contraseñas coinciden 
      document.getElementById("ok").classList.remove("ocultar");
      // Desabilitamos el botón de login 
      document.getElementById("login").disabled = true;
      // Refrescamos la página (Simulación de envío del formulario) 
      setTimeout(function() {
        location.reload();
        , 3000);
        return true;
      }
      
    }
    */

}
