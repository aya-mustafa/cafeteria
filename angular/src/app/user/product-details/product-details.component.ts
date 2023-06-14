import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productDetails:any;
  allproducts:any=[];
  constructor(private _ProductService : ProductService,private _ActivatedRoute:ActivatedRoute, private _CartService: CartService)
  {
    let id =_ActivatedRoute.snapshot.params["id"];


    this._ProductService.getAllProducts().subscribe((res)=>
    {
      this.allproducts = res.data;
      console.log(this.allproducts)

      for(var i=0;i<this.allproducts.length;i++)
      {
        if(id == this.allproducts[i].p_id)
        {
          this.productDetails = this.allproducts[i];
          console.log(this.productDetails)
        }
      }
  
    })
  }


    add()
    {
      this._CartService.addToCart(this.productDetails);
      alert("Product added to Cart")
    }

  addToCart()
  {
    this.add();
  }

}

