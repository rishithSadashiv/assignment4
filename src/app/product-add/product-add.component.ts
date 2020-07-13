import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product:Product = {
  Pid:null,
  Pname:'',
  Price:null,
  Stock:null
}

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }

  AddProduct(){
    
    //alert(this.product.Pid)
    this.dataService.addProducts(this.product);
    this.router.navigateByUrl('view');
  }

}
