import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders!:any[];
  constructor(private _HttpClient:HttpClient) { 
    let idFromLoacalStorge = localStorage.getItem("userId");
    let idOfCurrentUser = (Number(idFromLoacalStorge ))
   
   
  }

  getAllOrders():Observable<any>{
    return  this._HttpClient.get('http://localhost/cafe_project/controllers/orders/getallordersController.php')
   }


  getOrdersOfUser (id: number): Observable<any> {
    return this._HttpClient.get(`http://localhost/cafe_project/controllers/orders/getUserOrderController.php?id=${id}}`);
  } 


  deleteOrder (id: number): Observable<any> {
    return this._HttpClient.delete(`http://localhost/cafe_project/controllers/orders/deleteorderController.php?id=${id}`);
  } 



 
}
