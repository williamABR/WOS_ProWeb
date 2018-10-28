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

  aux:ProductoFac = { nombre: '', codigo:'', medida:'' ,precio:0, cantidad:1 };
  productos: Producto[] = [
    {  nombre: 'Mr. Nice', codigo:'123', medida:'ml' , precio:1000 ,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Narco' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Bombasto' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Celeritas' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Magneta' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'RubberMan' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Dynama' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Dr IQ' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    { nombre: 'Magma' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'},
    {  nombre: 'Tornado' , codigo:'123', medida:'ml', precio:1000,url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAzqGWhqjeAhUC01kKHY7NAA4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.le-relais-des-saisons.fr%2Fmagasin%2Flegumes%2Ftomates-rondes%2F&psig=AOvVaw3WhosAtGN7MoqRRXU2X7Tj&ust=1540778718029689'}
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

  agregarCarrito(nom:string,cod:string,pre:number,med:string){
    this.aux.nombre = nom;
    this.aux.codigo = cod;
    this.aux.precio = pre;
    this.aux.medida = med;
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