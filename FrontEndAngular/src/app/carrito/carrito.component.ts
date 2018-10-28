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
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' ,precio:1000, cantidad:1 },];
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
