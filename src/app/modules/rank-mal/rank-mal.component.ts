import { Component, OnInit } from '@angular/core';
import { Anime } from '../../shared/models/anime.model';
import { DesafioService } from '../../shared/services/desafios.service';
import { AnimeService } from '../../shared/services/anime.service';

@Component({
  selector: 'app-rank-mal',
  templateUrl: './rank-mal.component.html',
  styleUrls: ['./rank-mal.component.css']
})
export class RankMalComponent implements OnInit {
  listAnime : Anime[] = [];
  constructor(
    private animeService: AnimeService,
    private desafioService: DesafioService
  ) { }

  ngOnInit() {
  }

}
