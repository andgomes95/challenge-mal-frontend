import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map,take } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericCrudService<Usuario> {

  constructor(protected http: HttpClient) {
    super(http,  'usuario');
  }

  loadByUsername(username) {
    return this.http.get<Usuario>(`${this.url}?username=${username}`).pipe(take(1));
  }

}