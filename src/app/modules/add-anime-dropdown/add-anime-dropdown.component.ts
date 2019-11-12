import { Component, OnInit } from '@angular/core';
import { Anime } from '../../shared/models/anime.model';
import { AnimeService } from '../../shared/services/anime.service';

@Component({
  selector: 'app-add-anime-dropdown',
  templateUrl: './add-anime-dropdown.component.html',
  styleUrls: ['./add-anime-dropdown.component.css']
})
export class AddAnimeDropdownComponent implements OnInit {
  keyworldSearch: string = "";
  constructor(private animeService: AnimeService) { }
  listAnime : Anime[] = [];
  animes : Anime[] = [];
  ngOnInit() {
    this.animeService.list().subscribe(animes => {
      this.animes = animes; this.listAnime = animes
    });
  }
  onKey(value: string) {
    this.keyworldSearch = value;
    
  }
  keyworldSearchIsEmpty(){
    if(this.keyworldSearch==""){
      return true;
    }else{
      return false;
    }
  }

  selectAnime(anime: Anime){
    console.log(anime);
  }

}
