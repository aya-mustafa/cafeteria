import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  
  allProducts:any;
  constructor(private _CategoryService: ProductService, private _router:Router)
  {
    this._CategoryService.getAllproducts().subscribe((res)=>
    {
      this. allProducts = res;
    })
  }



}
