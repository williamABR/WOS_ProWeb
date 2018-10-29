import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestClientService } from './services/rest-client.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import {InventarioComponent} from './inventario/inventario.component';
import { CrearLoteComponent } from './crear-lote/crear-lote.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ProductoComponent } from './producto/producto.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    CarritoComponent,
    InventarioComponent,
    CrearLoteComponent,
    CrearProductoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
