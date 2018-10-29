import { Component, OnInit, Input } from '@angular/core';
import { ListaCarritoService } from '../lista-carrito.service';
import { ProductoFac } from '../services/productoFac';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  @Input() nombre: String;
  @Input() precio: number;
  @Input() codigo: number;
  @Input() medida: String;
  @Input() url: String;

  constructor() { 
    let newProd2: ProductoFac;
    newProd2 = { idProducto: 2, nombre: 'Producto1', unidadMedida:'Kg' ,precio:500, cantidad:1 }
    ListaCarritoService.carrito = [newProd2];
  }
  

  ngOnInit() {
    
  }

  agregarCarrito(){
    let newProd: ProductoFac;
    newProd = { idProducto: 1, nombre: this.nombre, unidadMedida: this.medida ,precio:this.precio, cantidad:1 }
    ListaCarritoService.carrito.push(newProd);

 
   
  }

}
