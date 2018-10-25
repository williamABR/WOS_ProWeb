import { Component, OnInit } from '@angular/core';
import { RestClientService } from './../services/rest-client.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private restClient: RestClientService,private router: Router) { 
    
  }

  ngOnInit() {
  }

  getTestData() {
    this.restClient.getTestData().subscribe(
      data => {
        console.log('Success' + data);
      },
      error => {
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
}