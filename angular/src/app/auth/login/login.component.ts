import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _router:Router, private auth: AuthService)
  {
  }

  loginForm:FormGroup = new FormGroup(
    {
      email :  new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
    }
  )


  
  

  login()
  {

      if(this.loginForm.status=='INVALID')
      {
        return;
      }
      this.auth.login(this.loginForm.value).subscribe(
      {
        next: res => {
          console.log(this.loginForm.value)
          // localStorage.setItem("token",res.token);
          // let isAdmin:any = localStorage.getItem("isAdmin");
          // if(isAdmin == "true")
          // {
          //   localStorage.setItem("Admin","true");
          // }
          // else
          // {
          //   localStorage.setItem("Admin","false");
          // }
    
        },
        error: err => alert("Error"),
        complete: () => {
        }
      })
    }


    navigate()
    {
      this._router.navigateByUrl('/register')
    }
}
