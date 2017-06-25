import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  nav = NavItems;
    
  constructor() { }

  ngOnInit() {
  }

}

let NavItems = [
  {
    name: 'Products',
    path: 'products'
  },
  {
    name: 'About',
    path: 'about'
  }
];