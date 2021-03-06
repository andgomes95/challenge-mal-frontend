import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Desafio } from '../models/desafio.model';
import { GenericCrudService } from './generic-crud.service';


@Injectable({
  providedIn: 'root'
})

export class DesafiosService extends GenericCrudService<Desafio> {

  
  constructor(protected http: HttpClient) {
    super(http,  'desafio');
  }

  loadByID(id) {
    return null;
  }
}