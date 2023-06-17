import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  term:string="";
  
  allProducts:any;
  constructor(private _CategoryService: ProductService, private _router:Router, private _CartService : CartService)
  {
    this._CategoryService.getAllProducts().subscribe((res)=>
    {
      this. allProducts = res.data;
      console.log(this.allProducts);
    })
  }

  goToDetails(productId:number)
  {
    this._router.navigateByUrl(`productDetails/${productId}`)
  }

  addToCart(product:any)
  {
    console.log(product)
    this._CartService.addToCart(product);
    alert("Product added to Cart")
    console.log(this._CartService.items);
  }
}
