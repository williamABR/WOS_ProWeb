import { RestClientService } from './../services/rest-client.service';
import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = 'user';
  password = 'password';

  
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  result: any;

  message: any;

  constructor(private restClient: RestClientService,private router: Router) {}

  ngOnInit() {
    /*setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);*/
  }

  doLogin() {
    this.restClient.login(this.user, this.password).subscribe(data => {
        //this.message = 'Login Ok';
        this.userType();
        //this.router.navigate(['inicio'])
      }, error => {
        console.error(error);
        //this.changeSuccessMessage();
        this.message = JSON.stringify(error);
      });
  }

  userType() {
    this.restClient.getRole().subscribe(
      data => {
        console.log('Success' + data);
        if(data['authorities'][0]['authority'] == 'ROLE_USER')
          this.router.navigate(['inicio']);
        else
          this.router.navigate(['inventario']);
      },    error => {
      console.error(error);
      this.message = JSON.stringify(error);
    });
  }


  getRestrictedData() {
    this.restClient.getRestrictedData().subscribe(
      data => {
        console.log('Success' + data);
        this.message = JSON.stringify(data);
      },
      error => {
        console.error(error);
        this.message = JSON.stringify(error);
      }
    );
  }

  logout() {
    this.restClient.logout().subscribe(data => {
        this.message = 'Logout Ok';
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }
  changeSuccessMessage(){
    this._success.next('Usuario o Contraseña incorrecto');
  }
}
