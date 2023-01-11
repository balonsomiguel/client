import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AtributosComponent } from './pages/atributos/atributos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogoComponent,
    RegistroComponent,
    AtributosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
