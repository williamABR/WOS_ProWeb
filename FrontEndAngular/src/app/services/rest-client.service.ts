import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Producto} from './Producto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestClientService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: headers,
      params: params,
      withCredentials: true
    });
  }

  newProduct(id: number, nombre: string, precio: number, medida: string, url: string) {
    let producto: Producto = new Producto();
    producto.idProducto = id;
    producto.nombre = nombre;
    producto.precio = precio;
    producto.unidadMedida = medida;
    producto.url = url;
    return this.http.post('http://localhost:8080/new_prod', JSON.stringify(producto), {
      withCredentials: true
    });
  }

  getTestData() {
    return this.http.post('http://localhost:8080/api/test', '', {
      withCredentials: true
    });
  }

  productosFindAll() {
    return this.http.post('http://localhost:8080/productos', '',{
      withCredentials: true
    });
  }

  getRole() {
    return this.http.post('http://localhost:8080/api/role', '',{
      withCredentials: true
    });
  }

  getRestrictedData() {
    return this.http.post('http://localhost:8080/api/restricted-method', '', {
      withCredentials: true
    });
  }

  logout() {
    /*return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });*/
    return this.newProduct(2, 'Producto2', 1000, 'g', 'www.producto2.com');
  }
}
