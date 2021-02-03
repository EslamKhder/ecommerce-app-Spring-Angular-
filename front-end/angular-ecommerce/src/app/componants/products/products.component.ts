import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.service.getProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }
}
