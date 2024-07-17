import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from 'src/app/interfaces/Livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})

export class ListaLivrosComponent implements OnInit, OnDestroy{

  protected listaLivros: Livro[] = [];
  protected campoBuscar: string = "";
  protected subscription: Subscription;
  protected livro: Livro;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
      
  }

  public buscarLivro() {
    this.subscription = this.livroService.buscar(this.campoBuscar).subscribe(
      {
        next: items => this.listaLivros = this.livrosResultadoParaLivros(items),
        error: error => console.error(error),
      }
    )
  }

  public livrosResultadoParaLivros(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail 
      })
    })

    return livros;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



