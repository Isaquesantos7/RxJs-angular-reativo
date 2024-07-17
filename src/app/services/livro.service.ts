import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item } from '../interfaces/Item';
import { LivrosResultado } from '../interfaces/LivroResultado';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly url: string = "https://www.googleapis.com/books/v1/volumes";

  constructor (private http: HttpClient) {}

  public buscar(buscarUsuario: string): Observable<Item[]> {
    /* 
      - Passando parametros na url.
    */
    const params = new HttpParams().append("q", buscarUsuario);
    
    /*
      - Pipe - função que serve para agrupar múltiplos operadores. Não modifica o Observable anterior.
      - Tap - Operador de serviços públicos. Usado para debugging. Não modifica o Observable.
      - Map - Operador de transformação. Transforma o Observable de acordo a função passada. Ou seja retorna um Observable modificado.
    */

    return this.http.get<LivrosResultado>(this.url, { params }).pipe(
      tap(resultado => console.log("Resultado antes do operador map: " + console.log(resultado))),
      map(resultado => resultado.items),
      tap(resultado => console.log("Resultado depois do operador map: " + resultado))
    );
  }
}