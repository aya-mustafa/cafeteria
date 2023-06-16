import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http : HttpClient, private _router : Router) {
  }

  getAllProducts():Observable<any>
  {
    return this._http.get('http://localhost/cafe_project/controllers/product/products.php');
  }
  getOneProduct(id:number):Observable<any>
  {
    return this._http.get(``);
  }
  addProduct(data:any):Observable<any>
  {
    return this._http.post(``,data);
  }
  updateProduct(id:number,updatedData:any):Observable<any>
  {
    return this._http.put(``,updatedData);
  }
  deleteProduct(id:number):Observable<any>
  {
    return this._http.delete(``);
  }
}
