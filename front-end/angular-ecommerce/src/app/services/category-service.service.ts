import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpCategory: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpCategory.get<Category[]>("http://localhost:8080/api/categories").pipe(
      map(response => response)
    );
  }
}
