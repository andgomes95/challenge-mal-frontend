import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Desafio } from '../models/desafio.model';

export class Cursos2Service extends CrudService<Curso> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

  loadByID(id) {
    return null;
  }
}