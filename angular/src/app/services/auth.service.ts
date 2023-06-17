import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient, private _router : Router) {
  }


  isLogin:any;
  isUserLogin()
  {
      let token = localStorage.getItem("token");
      if(token)
      {
        this.isLogin = true;
      }
      else
      {
        this.isLogin = false;
      }
  }

  canActivate():boolean | Observable<boolean>
   {
     let token  = localStorage.getItem("token");
     if(token)
     {
        return true;
     }
     this._router.navigateByUrl("/login")
         return false;
   }


   

   isAdmine:number = 0;
   saveCrrentUser()
   {
     let encryptedToken:any = localStorage.getItem("token");
     console.log(encryptedToken);
     let decriptedToken:any = jwtDecode(encryptedToken);
     console.log(decriptedToken);
    localStorage.setItem("isAdmin",decriptedToken.isAdmin);
    localStorage.setItem("userName",decriptedToken.username);
    localStorage.setItem("userId",decriptedToken.id);
   }
  


  signUp(signData:any):Observable<any>
  {
    console.log(signData)
     return this._http.post('http://localhost/cafe_project/controllers/auth/register.php',signData);
  }

  login(loginData:any):Observable<any>
  {
    return this._http.post('http://localhost/cafe_project/controllers/auth/login.php',loginData);
  }


}


