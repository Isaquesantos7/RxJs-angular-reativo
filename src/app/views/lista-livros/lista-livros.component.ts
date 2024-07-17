import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})

export class ListaLivrosComponent implements OnInit, OnDestroy{

  protected listaLivros: any[] = [];
  protected campoBuscar: string = "";

  protected subscription: Subscription;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
      
  }

  public buscarLivro() {
    this.subscription = this.livroService.buscar(this.campoBuscar).subscribe(
      {
        next: retorno => console.log(retorno),
        error: error => console.error(error),
        complete: () => console.log("Observable completado!"), 
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



