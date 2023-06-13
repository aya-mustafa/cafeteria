import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  // allCategory:any;
  // allProducts:any;
  // constructor(private _CategoryService: CategoryService, private _router:Router)
  // {
  //   this._CategoryService.getAllCategory().subscribe((res)=>
  //   {
  //     this.allCategory = res;
  //   })
  // }

  // getProductsRelatedToCategory(id:number)
  // {
  //   this._router.navigateByUrl(`categoryDetails/${id}`)
  // }
}
