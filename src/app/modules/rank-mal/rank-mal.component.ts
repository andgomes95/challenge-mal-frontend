import { Component, OnInit } from '@angular/core';
import { Anime } from '../../shared/models/anime.model';
import { Desafios } from '../../shared/models/desafios.model';
import { DesafiosService } from '../../shared/services/desafios.service';
import { AnimeService } from '../../shared/services/anime.service';


@Component({
  selector: 'app-rank-mal',
  templateUrl: './rank-mal.component.html',
  styleUrls: ['./rank-mal.component.css']
})

export class RankMalComponent implements OnInit {
  
  listAnime : Anime[] = [];
  animes : Anime[] = [];
  desafios : Desafios[] = [];
  classificacao: string = "Classificação Geral";
  
  constructor(
    private animeService: AnimeService,
    private desafioService: DesafiosService
  ) { }

  ngOnInit() {
    this.animeService.list().subscribe(animes => {
      this.animes = animes; this.listAnime = animes});
      this.desafioService.list().subscribe(desafios=> {
      this.desafios = desafios});
  }

  onClickClassificacao(){

    this.classificacao = "Classificação Geral";
    this.listAnime = this.animes;
  }

  onClickDesafioGeneric(index: number){

    this.classificacao = this.desafios[index].nome;
    this.listAnime = this.desafios[index].list;
  }

  onClickDesafioB(){

    this.classificacao = "Desafio B";
    this.listAnime = this.desafios[1].list;
  }

}
