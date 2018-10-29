import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/Producto';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { Lote } from '../services/lote';

@Component({
  selector: 'app-crear-lote',
  templateUrl: './crear-lote.component.html',
  styleUrls: ['./crear-lote.component.css']
})
export class CrearLoteComponent implements OnInit {

  loteNuevo:Lote={producto:{idProducto: 0, nombre:'' , unidadMedida:'', precio:0,url:''},idLote:0,codigoSKU:'',stock:0}; 
  idLote:number;
  stock:number = 0;
  codigo='';
  produ:Producto; 
  productos: Producto[] = [];

  constructor(private restClient: RestClientService, private router: Router) { }

  ngOnInit() {
    this.restClient.productosFindAll().subscribe(data => {
      //this.restClient.getRole.subscribe(data => {
      console.log('Success' + data);
      this.productos = data;
      //this.message =data;
    }, error => {
      console.error(error);
    }
    );
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
  crearLote(){
    this.loteNuevo.idLote = this.idLote;
    this.loteNuevo.codigoSKU = this.codigo;
    this.loteNuevo.stock = this.stock;
    this.loteNuevo.producto = this.produ;
    this.restClient.newLote(this.loteNuevo);
    this.router.navigate(['inventario'])
  }
}
