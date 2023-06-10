import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {

  allProducts:any=[];
  productsRelatedToCategory:any[]=[];
  constructor(private _ProductService : ProductService,private _ActivatedRoute:ActivatedRoute)
  {
    this._ProductService.getAllproducts().subscribe((res)=>
    {
      this.allProducts = res;
      let id =_ActivatedRoute.snapshot.params["id"];
      for(var i=0;i<this.allProducts.length;i++)
      {
        if(id == this.allProducts[i].category_id)
        {
          let currentProduct = this.allProducts[i];
         this.productsRelatedToCategory.push(currentProduct);
        }

      }
    })
  }



}
