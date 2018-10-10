import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'inventario/', component: InventarioComponent},
  {path: 'login/', component:LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
