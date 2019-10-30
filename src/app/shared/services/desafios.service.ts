import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Desafio } from '../models/desafio.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  const apiUrl = "api/desafios";

@Injectable({
  providedIn: 'root'
})
export class DesafiosService {

  constructor(
    private http: HttpClient
  ) {} 
  baseUrl: string = 'https://challenge-mal-frontend.stackblitz.io/api/';

 getDesafios(){
   return this.http.get<Desafio[]>(this.baseUrl);
 }

  getProducts (): Observable<Desafio[]> {
  return this.http.get<Desafio[]>(apiUrl)
    .pipe(
      tap(heroes => console.log('fetched challenges')),
      catchError(this.handleError('getChallenges', []))
    );
}













  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  protected extractData(res: Response | any) {
  
    try {
      return <any>res.json();
    }
    catch (e) {
      return {};
    }
  }

}