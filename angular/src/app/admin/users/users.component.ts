import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


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

  addUser()
  {
    this._UserService.addUser(this.addUserForm.value).subscribe(
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

  updateUser()
  {
    this._UserService.updateUser(2,this.updateUserForm.value).subscribe(
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
  deleteUser(id:any)
  {
    console.log(id)
    this._UserService.deleteUser(id).subscribe(
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
