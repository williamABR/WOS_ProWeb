import { Component, OnInit } from '@angular/core';
import { ProductoFac } from './../services/ProductoFac';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { ListaCarritoService } from '../lista-carrito.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    
  total:number = 0;
  productos: ProductoFac[] = [];


  constructor(private restClient: RestClientService, private router: Router) {
    this.cambiar();
    this.agregarValoresAlista();
   }

  ngOnInit() {
  }
  cambiar(){
    for (let i in this.productos) {
      this.total = this.total + (this.productos[i].precio * this.productos[i].cantidad); 
   }
  }
  agregarValoresAlista(){
    let newProd: ProductoFac;
    newProd = { idProducto: 1, nombre: 'producto1', unidadMedida:'Kg' ,precio:500, cantidad:1 }
    this.productos.push(newProd);
    //console.log(ListaCarritoService.carrito.length);
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

  agregarCarrito(){
    //this.aux.idProducto = cod;
    //this.aux.nombre = nom;
    //this.aux.precio = pre;
    //this.aux.unidadMedida = med;
    console.error("HOLLLAAAAAAAAA");
    //this.carrito.push(this.aux);
   
  }

}
