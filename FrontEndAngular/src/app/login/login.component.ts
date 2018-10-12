import { Component, OnInit } from '@angular/core';
import { VerificacionUsuarioService } from './services/verificacion-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = 'user';
  contrasena = 'password';
  constructor(private restCliente:VerificacionUsuarioService) { }

  ngOnInit() {
  }
   hacerLogin(){
    console.log('entro');
   }

}
