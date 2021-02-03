import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpProducts: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpProducts.get<Product[]>("http://localhost:8080/api/products").pipe(
      map(response => response)
    );
  }
}
