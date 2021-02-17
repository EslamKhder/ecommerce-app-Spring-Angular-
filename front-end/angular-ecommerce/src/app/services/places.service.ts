import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';
import {Country} from '../model/country';
import {HttpClient} from '@angular/common/http';
import {State} from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`http://localhost:8080/api/countries`).pipe(
      map(response => response)
    );
  }
  getAllStates(code: string): Observable<State[]> {
    return this.http.get<State[]>(`http://localhost:8080/api/states?code=${code}`).pipe(
      map(response => response)
    );
  }
}
