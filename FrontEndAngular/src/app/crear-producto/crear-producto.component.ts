import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { Producto } from '../services/Producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  nuevoProducto:Producto = {nombre:'',precio:0,codigo:'',medida:'',url:''};
  nombre='';
  precio=0;
  medida='';
  url = '';
  constructor(private restClient: RestClientService, private router: Router) { }

  ngOnInit() {
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

  crearProducto(){
    this.nuevoProducto.nombre = this.nombre;
    this.nuevoProducto.precio = this.precio;
    this.nuevoProducto.medida = this.medida;
    this.nuevoProducto.url = this.url;
    this.router.navigate(['inventario'])
    console.log(this.nuevoProducto);
  }

}