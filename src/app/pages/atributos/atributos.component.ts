import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params } from '@angular/router';
import { Atributo } from 'src/app/models/atributo.model';
import { AtributosService } from '../../services/atributos.service'; 
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from '../../services/products.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  id='';
  atributos: Atributo[] = [];
  atributo = {
    name: '',
    type: ''
  }

  atributoSelectedArray: Atributo[] = [];

  producto: Producto = new Producto('','','','');

  constructor(private rutaActiva: ActivatedRoute,private productsService: ProductsService, private atributosService: AtributosService, private router: Router){}

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.productsService.obtenerProducto(this.id).subscribe({
      next: (v) => this.producto = v.producto[0],
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    this.atributosService.listarAtributos().subscribe({
      next: (v) => this.atributos = v.atributos,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  selectedCard(id: any){
    
  }

  registrarAtributo(){
    this.atributosService.registrarAtributo(this.atributo).subscribe({
      next: (v) => window.location.reload(),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  onAtributoPressed(atributoSelected: Atributo, event: any){
    if (event.target.checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.atributoSelectedArray.push(atributoSelected);
    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.atributoSelectedArray.splice(this.atributoSelectedArray.indexOf(atributoSelected), 1);
    }
  }

  continuar(){
    console.log(this.atributoSelectedArray);
    //const dato: NavigationExtras = {state: {atributos: this.atributoSelectedArray}};
    //this.router.navigate(['/carrito/',this.id],dato);

    this.router.navigate(['/carrito/',this.id], {
      queryParams: {
          atributos: JSON.stringify(this.atributoSelectedArray)
      }
  });
  }

}
