import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from '../../services/products.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  productos: Producto[] = [];

  producto = {
    name: '',
    value: '',
    description: ''
  }

  constructor(private productsService: ProductsService, private router: Router){}

  ngOnInit(): void{
    this.productsService.listarProductos().subscribe({
      next: (v) => this.productos = v.productos,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  selectedCard(id: any){
    this.router.navigate(['/atributos/',id]);
  }


  registrarProducto(){
    this.productsService.registrarProducto(this.producto).subscribe({
      next: (v) => window.location.reload(),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

}
