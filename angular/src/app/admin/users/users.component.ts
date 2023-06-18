import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  term:string="";
  currentPage = 1; // start with the first page
  itemsPerPage = 4; // show 5 items per page
  addUserForm:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      room_number:new FormControl('',[Validators.required]),
      ext:new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
    }
  )


  updateUserForm:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      room_number:new FormControl('',[Validators.required]),
      ext:new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
    }
  )
  
  user:any;
  allUsers:any;
  updatedCurrentElementId:any;
  imageFile!:File;
  constructor( private _UserService: UserService)
  {

    this._UserService.getAllUsers().subscribe((data=>{
      this.allUsers=data
      console.log(data);
      
    }))
      // {
      //   next: res => {
      //     this.allUsers = res;
      //     console.log(res)
      //   },
      //   error: err =>
      //   alert("err"),
      //   complete: () => {
      //   }
      // })

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

    addphoto(event:any)
    {     
      //  console.log(event.target);
      //  console.log(this.addProductForm);
  console.log(this.addUserForm);
  
      if(event.target.files.length>0){
  
         this.imageFile=event.target.files[0];
        //  console.log(this.imageFile);
         
         this.addUserForm.patchValue({
           image:this.imageFile
         });
  
         console.log(this.addUserForm);
  
    }
  
    }
  
  addUser()
  {
    const formdata=new FormData();
    formdata.append('name',this.addUserForm.get('name')?.value)
    formdata.append('email',this.addUserForm.get('email')?.value)
    formdata.append('password',this.addUserForm.get('password')?.value)
    formdata.append('room_number',this.addUserForm.get('room_number')?.value)
    formdata.append('ext',this.addUserForm.get('ext')?.value)
    formdata.append('image',this.imageFile)
    
    this._UserService.addUser(formdata).subscribe(
      {
        next: res => {
          console.log(res);
          
          alert("added Succssfully");
          location.replace("/admin/users")
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

  updateUser()
  {
    const formdata=new FormData();
    formdata.append('name',this.updateUserForm.get('name')?.value)
    formdata.append('email',this.updateUserForm.get('email')?.value)
    formdata.append('password',this.updateUserForm.get('password')?.value)
    formdata.append('room_number',this.updateUserForm.get('room_number')?.value)
    formdata.append('ext',this.updateUserForm.get('ext')?.value)
    formdata.append('image',this.imageFile)

    this._UserService.updateUser(this.updatedCurrentElementId,formdata).subscribe(
      {
        next: res => {
          alert("updated Succssfully");
          location.replace("/admin/users");
        },
        error: err =>
        {
          location.replace("/admin/users")
        }
    ,
        complete: () => {
        }
      })
  }
  deleteUser(id:any)
  {
    console.log(id)
    this._UserService.deleteUser(id).subscribe(
      {
        next: res => {
          alert("deleted Succssfully");
          location.replace("/admin/users")
        },
        error: err =>
        console.log(err),
        complete: () => {
        }
      })
  }
}
