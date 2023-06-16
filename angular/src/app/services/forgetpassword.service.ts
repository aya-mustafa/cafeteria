import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor(private _HttpClient:HttpClient) { }

  getcode():Observable<any>
  {
    return this._HttpClient.get('http://localhost/cafe_project/controllers/auth/forgetpassword.php');
  }

}