import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpProducts: HttpClient) { }


  getProductById(id: number): Observable<Product> {
    return this.httpProducts.get<Product>(`http://localhost:8080/api/product?id=${id}`).pipe(
      map(response => response)
    );
  }
  getProducts(page: number,size: number): Observable<Product[]>{
    return this.httpProducts.get<Product[]>(`http://localhost:8080/api/products?page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }
  getProductsCategory(id: number,page: number,size: number): Observable<Product[]>{
    return this.httpProducts.get<Product[]>(`http://localhost:8080/api/productsbycategory?id=${id}&page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }
  getProductsByKey(key: string,page: number,size: number): Observable<Product[]>{
    return this.httpProducts.get<Product[]>(`http://localhost:8080/api/productskey?key=${key}&page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }
}
