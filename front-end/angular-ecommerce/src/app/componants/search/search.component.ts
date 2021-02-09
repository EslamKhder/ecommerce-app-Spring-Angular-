import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductServiceService} from '../../services/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(key: string) {
    this.router.navigateByUrl(`/search/${key}`)
    /*console.log(key)
    this.service.getProductsByKey(key).subscribe(
      data => {
        this.products = data
      }
    );*/
  }
}
