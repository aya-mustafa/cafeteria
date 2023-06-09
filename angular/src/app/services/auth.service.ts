import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient, private _router : Router) {
  }


  login(loginData:any):Observable<any>
  {
    return this._http.post('',loginData);
  }
}
