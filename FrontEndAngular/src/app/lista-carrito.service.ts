import { Injectable } from '@angular/core';
import { ProductoFac } from './services/productoFac';

@Injectable()
export class ListaCarritoService {
  carrito: ProductoFac[] = [];
  static carrito: any;

  constructor() { 
    //this.carrito = [];
  }
  
}
