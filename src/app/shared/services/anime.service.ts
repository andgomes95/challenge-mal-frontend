import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Anime } from '../models/anime.model';
import { GenericCrudService } from './generic-crud.service';


@Injectable({
  providedIn: 'root'
})

export class AnimeService extends GenericCrudService<Anime> {

  
  constructor(protected http: HttpClient) {
    super(http,  'anime');
  }
}