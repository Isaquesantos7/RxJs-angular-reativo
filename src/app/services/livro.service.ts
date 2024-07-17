import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly url: string = "https://www.googleapis.com/books/v1/volumes";

  constructor (private http: HttpClient) {}

  public buscar(buscarUsuario: string): Observable<any> {
    const params = new HttpParams().append("q", buscarUsuario);
    
    return this.http.get<any>(this.url, { params });
  }
}