import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { Producto } from './../services/Producto';
import { ProductoFac } from '../services/productoFac';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  aux:ProductoFac = { idProducto: 0, nombre: '', unidadMedida:'' ,precio:0, cantidad:1 };
  productos: Producto[] = [
    {  idProducto: 1, nombre: 'Mr. Nice', unidadMedida:'ml' , precio:1000 ,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 2, nombre: 'Narco' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 3, nombre: 'Bombasto' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 4, nombre: 'Celeritas' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 5, nombre: 'Magneta' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 6, nombre: 'RubberMan' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 7, nombre: 'Dynama' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 8, nombre: 'Dr IQ' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    { idProducto: 9, nombre: 'Magma' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  idProducto: 10, nombre: 'Tornado' , unidadMedida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'}
  ];
    carrito:ProductoFac[] = [];
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

  }

  agregarCarrito(cod:number,nom:string,pre:number,med:string){
    this.aux.idProducto = cod;
    this.aux.nombre = nom;
    this.aux.precio = pre;
    this.aux.unidadMedida = med;
    this.carrito.push(this.aux);
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