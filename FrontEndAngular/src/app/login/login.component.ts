import { RestClientService } from './../services/rest-client.service';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = 'user';
  password = 'password';

  result: any;

  message: any;

  constructor(private restClient: RestClientService,private router: Router) {}

  ngOnInit() {}

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.restClient.login(this.user, this.password).subscribe(data => {
        this.message = 'Login Ok';
        this.router.navigate(['inicio'])
      }, error => {
        console.error(error);
        this.message = JSON.stringify(error);
      });
  }

  getTestData() {
    this.restClient.getTestData().subscribe(
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
}
