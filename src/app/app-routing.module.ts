import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import {RegistroComponent} from './pages/registro//registro.component';
import {LoginComponent} from './pages/login/login.component';
import {CatalogoComponent} from './pages/catalogo/catalogo.component';
import {AtributosComponent} from './pages/atributos/atributos.component';
import {CarritoComponent} from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'atributos/:id',
    component: AtributosComponent
  },
  {
    path: 'carrito/:id',
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
