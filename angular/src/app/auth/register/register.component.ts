import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _router:Router, private auth:AuthService)
  {
  }

  regestrationForm:FormGroup = new FormGroup(
    {
      username: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email :  new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.pattern(/^[a-z]{1}[0-9]{3,8}/)]),
    }
  )

  register()
  {
      if(this.regestrationForm.status=='INVALID')
      {
        return;
      }
      this.auth.signUp(this.regestrationForm.value).subscribe(
      {
        next: res => {
          this._router.navigateByUrl('/login')
        },
        error: err => alert(err.error.message),
        complete: () => {
  
        }
      })
    }


    
    navigate()
    {
      this._router.navigateByUrl('/login')
    }
}
