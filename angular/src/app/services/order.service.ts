import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders!:any[];
  constructor(private _HttpClient:HttpClient) { }

  getorders():Observable<any>{
    return  this._HttpClient.get('http://localhost/PHP/devpro/Cafe-Api/controllers/orders/getallordersControllers.php')
   }
 
}
