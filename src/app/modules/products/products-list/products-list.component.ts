import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../services/product.service';

import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  err: any;
  
  constructor(private service: ProductService) {
    
  };

  ngOnInit() {
    this.getProducts();
  } 

  private getProducts() {
        this.service.getProducts().subscribe(
            products => this.products = products,
            error => this.err = error
        );
  }
 
}

