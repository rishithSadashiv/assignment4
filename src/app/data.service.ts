import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products:Product[] = [];

  constructor() {
    this.products=[
      {
        Pid :1,
        Pname:"p1",
        Price:300,
        Stock:5
      }
    ];
   }

  getProducts():Product[]{
    return this.products;
  }

  addProducts(product:Product){
    //alert(product.Pid)
    this.products.push(product)
  }
}
