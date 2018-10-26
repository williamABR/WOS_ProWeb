import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import {Producto} from './../services/Producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private restClient: RestClientService,private router: Router) { 
    
  }

  ngOnInit() {
    this.restClient.productosFindAll().subscribe(productos => this.productos = productos);
    Producto aux = new Producto();
    aux.nombre = "papa";
    Producto aux1 = new Producto();
    aux1.nombre = "tomate";
    productos.push(aux);
    productos.push(aux1);

  }

  logout() {
    this.restClient.logout().subscribe(data => {
        //this.message = 'Logout Ok';
        this.router.navigate(['login'])
      }, error => {
        console.error(error);
        //this.message = JSON.stringify(error);
      });
  }
}