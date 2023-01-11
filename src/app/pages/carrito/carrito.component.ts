import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params } from '@angular/router';
import { Carrito } from 'src/app/models/carrito.model';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { Atributo } from 'src/app/models/atributo.model';
import { ProductsService } from '../../services/products.service'; 
import { CompraService } from '../../services/compra.service'; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  id='';
  producto: Producto = new Producto('','','','');
  atributos: Atributo[] = [];
  carrito: Carrito = new Carrito('','','');

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private productsService: ProductsService, private compraService: CompraService){
    /*this.rutaActiva.params.subscribe(params => {
      this.atributos = params['atributos'];
      console.log(this.atributos);
    });*/
    this.rutaActiva.queryParams.subscribe((res) => {
      this.atributos = JSON.parse(res['atributos']);
    });
    console.log(this.atributos);
  }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.productsService.obtenerProducto(this.id).subscribe({
      next: (v) => this.producto = v.producto[0],
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });


    /*
    const navigation = this.rutaActiva.getCurrentNavigation();
    let objeto= navigation.extras.state as {atributos: Atributo};
    this.trabajador = objeto.atributos as Atributo;
    console.info(this.trabajador.nombre);*/
  }

  selectedCard(id:any){

  }

  continuar(){
    for(let i=0;i<this.atributos.length;i++){
      this.carrito.atributos = this.carrito.atributos+'-'+this.atributos[i].id;
    }
    console.log(this.carrito.atributos);
    this.carrito.producto = this.id;
    this.carrito.usuario = localStorage.getItem('user')+'';
    this.compraService.registrarCompra(this.carrito).subscribe({
      next: (v) => this.router.navigate(['/catalogo']),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

}
