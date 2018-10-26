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

  getTestData() {
    return this.http.post('http://localhost:8080/api/test', '', {
      withCredentials: true
    });
  }
  productosFindAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:8080/api/productos');
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
