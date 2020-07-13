import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
products:Product[]
  constructor(private router:Router, private dataService:DataService) { 
    this.products=dataService.getProducts()
    //alert(this.products.length)
  }

  ngOnInit(): void {
  }

}
