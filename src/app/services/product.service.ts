import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { any } from 'codelyzer/util/function';
import { Observable } from 'rxjs/Rx';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private http: Http) { 
  }
  
  getProducts(): Observable<Product[]> {
    return this.http.get('api/products')
            .map(this.extractProduct)
            .catch(this.handleError);
  } 
  
  getProduct(id): Observable<Product> {
    return this.http.get(`api/products/${id}`)
            .map(this.extractProduct)
            .catch(this.handleError)
  }

  private extractProduct(response: Response) {
    let product = response.json().data;
    return product;
  }

  private handleError(error: any, caught: Observable<any>): any {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
