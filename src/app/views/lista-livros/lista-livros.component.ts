import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})

export class ListaLivrosComponent implements OnInit{

  protected listaLivros: any[] = [];
  protected campoBuscar: string = "";

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
      
  }

  buscarLivro() {
    this.livroService.buscar(this.campoBuscar).subscribe(
      (dados) => console.log(dados),
      (error) =>  console.error(error)
    )
  }
}



