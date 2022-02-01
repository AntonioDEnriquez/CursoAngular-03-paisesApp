import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiRegion: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population');
  }




  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });/*.pipe(
      // el of es una funcion que genera observables
      catchError(err => of([]))
    );*/
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });/*.pipe(
      // el of es una funcion que genera observables
      catchError(err => of([]))
    );*/
  }

  getPaisPorAlpha(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);/*.pipe(
      // el of es una funcion que genera observables
      catchError(err => of([]))
    );*/
  }

  buscarRegion(region: string): Observable<Country[]> {

    // recive una key y su valor
    // const params = new HttpParams()
    //   .set('fields', 'name,capital,alpha2code,flags,population');

    const url = `${this.apiRegion}/regionalbloc/${region}`;
    // return this.http.get<Country[]>(url, { params: params })
    // en encmascript6 poner una propiedad cuyo valor es igual al nombre de la misma variable esto es como redundante y lo podriamos obiar borrando uno y quediaria como abajo
    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      )
  }


}
