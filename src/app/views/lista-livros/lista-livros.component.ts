import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/Item';
import { Livro } from 'src/app/interfaces/Livro';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
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
        next: items => this.listaLivros = this.livrosResultadoParaLivros(items),
        error: error => console.error(error),
      }
    )
  }

  public livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



