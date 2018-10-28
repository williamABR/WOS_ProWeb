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

  loteNuevo:Lote={producto:{nombre:'' , codigo:'', medida:'', precio:0,url:''},id:0,codigoSKU:'',stock:0}; 
  stock:number = 0;
  codigo='';
  produ:Producto; 
  productos: Producto[] = [
    {  nombre: 'Tomate' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    { nombre: 'Manzana' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Carne' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'}
  ];

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
  crearLote(){
    this.loteNuevo.codigoSKU = this.codigo;
    this.loteNuevo.stock = this.stock;
    this.loteNuevo.producto = this.produ;
    console.log(this.loteNuevo);
    this.router.navigate(['inventario'])
  }
}
