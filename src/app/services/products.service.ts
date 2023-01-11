import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlApi = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  public listarProductos(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  public obtenerProducto(id:any): Observable<any> {
    return this.http.get<any>(this.urlApi+'/'+id);
  }
  public registrarProducto(producto:any): Observable<any>{
    return this.http.post<any>(this.urlApi+'/add', producto);
  }
}
