import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryServiceService} from '../../services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories: Category[] = [];
  constructor(private httpcategory: CategoryServiceService) { }

  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories(){
    this.httpcategory.getCategories().subscribe(
      data => {
        this.categories = data
      }
    );
  }

}
