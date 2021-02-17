import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  constructor() { }

  getMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];
    for (let start= startMonth;start<=12;start++){
      data.push(start);
    }
    return of(data);
  }
  getYears(): Observable<number[]> {
    let data: number[] = [];
    const startYear: number = new Date().getFullYear(); // 2025
    const endYear: number = startYear + 10;  // 2035

    for (let start= startYear;start<=endYear;start++){
      data.push(start);
    }
    return of(data);
  }
}
