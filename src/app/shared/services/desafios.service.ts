import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
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














  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
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