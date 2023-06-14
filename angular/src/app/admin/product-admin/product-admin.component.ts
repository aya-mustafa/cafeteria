import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
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
  
  product:any;
  products!:any[];
  updatedCurrentElementId:any;

  constructor( private _AdminService: AdminService)
  {

    this._AdminService.getAllProducts().subscribe((res=>{
      this.products=res.data
      // console.log(this.products);
      
    }))
    // this._ProductService.getAllProducts().subscribe(
    //   {
    //     next: res => {
    //       this.products = res;
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
    // this._AdminService.addProduct(this.addProductForm.value).subscribe((res)=>{
    //   this.products=res.data.product
    //     console.log(this.products);

    // }
    // console.log(this.addProductForm.value);
    
        this._AdminService.addProduct(this.addProductForm.value).subscribe(

      {
        next: res => {
          console.log(res);
          
          console.log("added Succssfully")
        },
        error: err =>
        console.log(err),
        complete: () => {
        }
      })
        
    // )
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
    this._AdminService.updateProduct(2,this.updateProductForm.value).subscribe(
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
    this._AdminService.deleteProduct(id).subscribe(
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
