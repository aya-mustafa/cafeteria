import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/services/forgetpassword.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _router:Router, private _ForgetPassword: ForgetpasswordService)
  {

  }

  loginForm:FormGroup = new FormGroup(
    {
      email :  new FormControl('',[Validators.required,Validators.email]),
    
    }
  )

  forgetPassword(loginForm: any)
  { 

    console.log(loginForm.value);
    
    this._ForgetPassword.getcode(loginForm.value).subscribe(res => {
      console.log(res);
      
    })
    
    // this._router.navigateByUrl('/login')
  }


   
}
