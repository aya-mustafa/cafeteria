import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productDetails:any;
  allproducts:any=[];
  constructor(private _ProductService : ProductService,private _ActivatedRoute:ActivatedRoute)
  {
    let id =_ActivatedRoute.snapshot.params["id"];


    this._ProductService.getAllproducts().subscribe((res)=>
    {
      this.allproducts = res;

      for(var i=0;i<this.allproducts.length;i++)
      {
        if(id == this.allproducts[i].product_id)
        {
          this.productDetails = this.allproducts[i];
          console.log(this.productDetails)
        }
      }
  
    })
  }



}
