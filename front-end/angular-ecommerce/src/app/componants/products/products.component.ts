import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  idValue: number = 0;
  constructor(private service: ProductServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    let result = this.route.snapshot.paramMap.has("id");
    if(result){
      this.listProductsCategories();
    } else {
      this.listProducts();
    }
  }

  listProducts(){
    this.service.getProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }
  listProductsCategories(){
    // @ts-ignore
    this.idValue = +this.route.snapshot.paramMap.get("id");
    this.service.getProductsCategory(this.idValue).subscribe(
      data => {
        this.products = data
      }
    );
  }
}
