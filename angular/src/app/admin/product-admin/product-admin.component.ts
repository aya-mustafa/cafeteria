import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {


  term:string="";
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
      product_id:new FormControl('',[Validators.required]),
    }
  )
  
  
  imageFile!:File;
  product:any;
  products!:any[];
  currentPage = 1; // start with the first page
  itemsPerPage = 4; // show 5 items per page
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
      

      console.log(formdata);

        this._AdminService.addProduct(formdata).subscribe(

      {
        
        next: res => {
          console.log(res);
          
          alert("added Succssfully");
          location.replace("/admin/products")
        },
        error: err =>
        {
          alert("added Succssfully");
          location.replace("/admin/products")
        }
        ,
        complete: () => {
        }
      })
        
    // )
  }
  addphoto(event:any)
  {     
    //  console.log(event.target);
    //  console.log(this.addProductForm);
console.log(this.addProductForm);

    if(event.target.files.length>0){

       this.imageFile=event.target.files[0];
      //  console.log(this.imageFile);
       
       this.addProductForm.patchValue({
         image:this.imageFile
       });

       console.log(this.addProductForm);

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
      formdata.append('name',this.updateProductForm.get('name')?.value)
      formdata.append('price',this.updateProductForm.get('price')?.value)
      formdata.append('quantity',this.updateProductForm.get('quantity')?.value)
      formdata.append('product_id',this.updateProductForm.get('product_id')?.value)
      formdata.append('image',this.imageFile)

      console.log(formdata.get('name'));
      
    this._AdminService.updateProduct(formdata).subscribe(
      {
        next: res => {
          alert("updated Succssfully")
          location.replace("/admin/products")
          
        },
        error: err =>
        {
          alert("updated Succssfully")
          location.replace("/admin/products")
        },
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
          alert("deleted Succssfully");
          location.replace("/admin/products")
        },
        error: err =>  
         {
          alert("delected Succssfully");
          location.replace("/admin/products")
         },
        complete: () => {
        }
      })
  }
}
