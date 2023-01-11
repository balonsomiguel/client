import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) { }

  public registrarCliente(user:any): Observable<any> {
    return this.http.post<any>(this.urlApi+'/registrar', user);
  }

  public consultarCliente(user:any): Observable<any> {
    return this.http.post<any>(this.urlApi+'/consultar', user);
  }
}
