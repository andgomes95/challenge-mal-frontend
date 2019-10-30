import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Desafio } from '../models/desafio.model';
import { GenericCrudService} from './generic-crud.service';
import { environment } from '../../../environments/environment';

export class Desafios extends GenericCrudService<Desafio> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

  loadByID(id) {
    return null;
  }
}