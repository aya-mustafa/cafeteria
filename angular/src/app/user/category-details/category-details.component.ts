import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {

  constructor(private _ProductService : ProductService,private _ActivatedRoute:ActivatedRoute)
  {

  }


}
