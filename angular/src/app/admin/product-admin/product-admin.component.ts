import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {


  addProductForm:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl('',[Validators.required]),
      quantity:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
    }
  )


  updateProductForm:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl('',[Validators.required]),
      quantity:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
    }
  )
  
  user:any;
  allUsers:any;
  updatedCurrentElementId:any;

  constructor( private _ProductService: ProductService)
  {
    // this._ProductService.getAllProducts().subscribe(
    //   {
    //     next: res => {
    //       this.allUsers = res;
    //       console.log(res)
    //     },
    //     error: err =>
    //     alert("err"),
    //     complete: () => {
    //     }
    //   })
  }



    showAddBox()
    {
      let layer:any = document.getElementById("layer");
      layer.style.display = "block";
    }
    closeAddBox()
    {
      let layer:any = document.getElementById("layer");
      layer.style.display = "none";
    }

  addProduct()
  {
    this._ProductService.addProduct(this.addProductForm.value).subscribe(
      {
        next: res => {
          console.log("added Succssfully")
        },
        error: err =>
        console.log(err),
        complete: () => {
        }
      })
  }


  showUpdateBox(id:any)
    {
      let updatelayer:any = document.getElementById("updatelayer");
      updatelayer.style.display = "block";
      this.updatedCurrentElementId = id;
    }
    closeUpdateBox()
    {
      let updatelayer:any = document.getElementById("updatelayer");
      updatelayer.style.display = "none";
    }

  updateProduct()
  {
    this._ProductService.updateProduct(2,this.updateProductForm.value).subscribe(
      {
        next: res => {
          console.log("updated Succssfully")
        },
        error: err =>
        console.log(err),
        complete: () => {
        }
      })
  }
  deleteProduct(id:any)
  {
    console.log(id)
    this._ProductService.deleteProduct(id).subscribe(
      {
        next: res => {
          console.log("deleted Succssfully")
        },
        error: err =>
        console.log(err),
        complete: () => {
        }
      })
  }
}
