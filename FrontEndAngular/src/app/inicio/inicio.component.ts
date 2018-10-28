import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { Producto } from './../services/Producto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: Producto[] = [];
  message: any;

  constructor(private restClient: RestClientService, private router: Router) {

  }

  ngOnInit() {
    //this.restClient.productosFindAll().subscribe(productos => this.productos = productos);
    this.restClient.productosFindAll().subscribe(data => {
      //this.restClient.getRole.subscribe(data => {
      console.log('Success' + data);
      this.message = JSON.stringify(data);
      //this.message =data;
    }, error => {
      console.error(error);
      this.message = JSON.stringify(error);
    }
    );

    let aux: Producto = new Producto();
    aux.nombre = "papa";
    let aux1: Producto = new Producto();
    aux1.nombre = "tomate";
    this.productos.push(aux);
    this.productos.push(aux1);

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