import { Component, OnInit } from '@angular/core';
import { Anime } from '../../shared/models/anime.model';
import { DesafiosService } from '../../shared/services/desafios.service';
import { AnimeService } from '../../shared/services/anime.service';


const HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

@Component({
  selector: 'app-rank-mal',
  templateUrl: './rank-mal.component.html',
  styleUrls: ['./rank-mal.component.css']
})

export class RankMalComponent implements OnInit {
  
  listAnime : Anime[] = [];
  
  constructor(
    private animeService: AnimeService,
    private desafioService: DesafiosService
  ) { }

  ngOnInit() {
  }

}
