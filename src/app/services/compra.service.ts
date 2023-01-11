import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private urlApi = 'http://localhost:3000/api/compras';

  constructor(private http: HttpClient) { }


  public registrarCompra(compra:any): Observable<any>{
    return this.http.post<any>(this.urlApi+'/add', compra);
  }
}
