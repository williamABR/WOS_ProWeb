import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";
import { Producto } from './../services/Producto';
import { Lote } from './../services/Lote';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  productos: Producto[] = [];
  lotes: Lote[] = [];
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

    this.restClient.lotesFindAll().subscribe(data => {
      //this.restClient.getRole.subscribe(data => {
      console.log('Success' + data);
      this.lotes = data;
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

  eliminarProducto(id:number){
    this.restClient.deleteProduct(id);
  }
  eliminarLote(id:number){
    this.restClient.deleteLote(id);
  }

}
