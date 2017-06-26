import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  public cart = [];
  public totalPrice: number;
  public totalQuantity: number;

  constructor() { }

  ngOnInit() {
  }

}
