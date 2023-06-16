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
  
  
  imageFile!:File;
  product:any;
  products!:any[];
  updatedCurrentElementId:any;

  constructor( private _AdminService: AdminService)
  {

    this._AdminService.getAllProducts().subscribe((res=>{
      this.products=res.data
      
      
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
    const formdata=new FormData();
      formdata.append('name',this.addProductForm.get('name')?.value)
      formdata.append('price',this.addProductForm.get('price')?.value)
      formdata.append('quantity',this.addProductForm.get('quantity')?.value)
      formdata.append('image',this.imageFile)
      

    console.log(this.addProductForm.value);
    
        this._AdminService.addProduct(formdata).subscribe(

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
  addphoto(event:any)
  {     
     console.log(event.target);
     console.log(this.addProductForm);

    if(event.target.files.length>0){
       this.imageFile=event.target.files[0];
       this.addProductForm.patchValue({
         image:this.imageFile
       });
  }
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
    const formdata=new FormData();
      formdata.append('name',this. updateProductForm.get('name')?.value)
      formdata.append('price',this. updateProductForm.get('price')?.value)
      formdata.append('quantity',this. updateProductForm.get('quantity')?.value)
      formdata.append('image',this.imageFile)
      // console.log(formdata);
      console.log(this.updateProductForm.value);
      console.log(this.updatedCurrentElementId);
      
    this._AdminService.updateProduct(this.updatedCurrentElementId,formdata).subscribe(
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
         location.replace('/admin/products'),
        complete: () => {
        }
      })
  }
}
