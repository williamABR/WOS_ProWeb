import { Component, OnInit } from '@angular/core';
import { ProductoFac } from './../services/ProductoFac';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: ProductoFac[] = [
    {  idProducto: 1, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 2, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 3, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 4, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 5, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 6, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },
    {  idProducto: 7, nombre: 'Mr. Nice', unidadMedida:'ml' ,precio:1000, cantidad:1 },];
  total:number = 0;

  constructor(private restClient: RestClientService, private router: Router) {
    this.cambiar();
   }

  ngOnInit() {
  }
  cambiar(){
    for (let i in this.productos) {
      this.total = this.total + (this.productos[i].precio * this.productos[i].cantidad); 
   }
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
