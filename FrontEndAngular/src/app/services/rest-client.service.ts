import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Producto} from './Producto';
import { Observable } from 'rxjs/Observable';
import { Lote } from './lote';

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

  newProduct(producto:Producto) {
    /*let producto: Producto = new Producto();
    producto.idProducto = id;
    producto.nombre = nombre;
    producto.precio = precio;
    producto.unidadMedida = medida;
    producto.url = url;
    return this.http.post('http://localhost:8080/new_prod', JSON.stringify(producto), {
      withCredentials: true
    });*/    
     const body = JSON.stringify(producto);
     const headers = new HttpHeaders();
     headers.append('Content-Type','application/json');

     const params = new HttpParams()
       .set('product', body);

      return this.http.post('http://localhost:8080/new_prod', null, {
        headers: headers,
        params: params,
        withCredentials: true
      });
  }

  deleteProduct(id:number){
    return this.http.get('http://localhost:8080/del_prod/'+id,{
      withCredentials: true
    });
  }

  getTestData() {
    return this.http.post('http://localhost:8080/api/test', '', {
      withCredentials: true
    });
  }

  productosFindAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:8080/productos',{
      withCredentials: true
    });
  }

  newLote(lote:Lote) {
    
     const body = JSON.stringify(lote);
     const headers = new HttpHeaders();
     headers.append('Content-Type','application/json');

     const params = new HttpParams()
       .set('product', body);

      return this.http.post('http://localhost:8080/new_lote', null, {
        headers: headers,
        params: params,
        withCredentials: true
      });
  }

  lotesFindAll(): Observable<Lote[]> {
    return this.http.get<Lote[]>('http://localhost:8080/lotes',{
      withCredentials: true
    });
  }

  deleteLote(id:number){
    return this.http.get('http://localhost:8080/del_lote/'+id,{
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
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }
}
