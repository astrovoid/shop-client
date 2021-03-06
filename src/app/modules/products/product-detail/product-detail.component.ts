import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../../../models/product';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private service: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getProduct(+params['id']))
      .subscribe(
        product => this.product = product,
        error => {
          if (error.status === 404) {
            this.router.navigate(['/404'])
          } 
        }
      )
  }

  private addToCart(product: Product) {
      
  }

  private goBack(): void {
    this.location.back();
  }

}
