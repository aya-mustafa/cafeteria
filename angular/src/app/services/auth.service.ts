import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import jwtDecode from 'jwt-decode';

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
     this._router.navigateByUrl("/user/login")
         return false;
   }


  //  isAdmine:boolean = false;
  //  saveCrrentUser()
  //  {
  //    let encryptedToken:any = localStorage.getItem("token");
  //    console.log(encryptedToken);
  //    let decriptedToken:any = jwtDecode(encryptedToken);
  //    localStorage.setItem("isAdmin",decriptedToken.isAdmin);
  //  }
  


  signUp(signData:any):Observable<any>
  {
    console.log(signData)
     return this._http.post('',signData);
  }

  login(loginData:any):Observable<any>
  {
    return this._http.post('http://localhost/cafeteria(Backend)/Cafe-Api/auth/login.php',loginData);
  }


}


