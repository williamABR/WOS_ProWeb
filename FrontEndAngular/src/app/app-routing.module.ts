import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';
import {CarritoComponent} from './carrito/carrito.component';
import {InventarioComponent} from './inventario/inventario.component';
import {CrearProductoComponent} from './crear-producto/crear-producto.component';
import {CrearLoteComponent} from './crear-lote/crear-lote.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  {path: 'inventario', component: InventarioComponent},
  {path: 'crearlote', component: CrearLoteComponent},
  {path: 'crearproducto', component: CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
