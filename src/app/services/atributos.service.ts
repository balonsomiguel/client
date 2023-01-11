import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AtributosService {

  private urlApi = 'http://localhost:3000/api/atributos';

  constructor(private http: HttpClient) { }

  public listarAtributos(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  public registrarAtributo(atributo:any): Observable<any>{
    return this.http.post<any>(this.urlApi+'/registrar', atributo);
  }
}
