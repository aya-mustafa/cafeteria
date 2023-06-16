import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _HttpClient:HttpClient ) { }

  getAllProducts():Observable<any>
  {
    return this._HttpClient.get('http://localhost/cafe_project/controllers/product/products.php');
  }
  // getOneUsers(id:number):Observable<any>
  // {
  //   return this._http.get(`http://localhost/cafeteria(Backend)/Cafe-Api/users/read.php/?id=${id}`);
  // }
  addProduct(data:any):Observable<any>
  {
    return this._HttpClient.post(`http://localhost/cafe_project/controllers/product/create_product.php`,data);
  }
  updateProduct(updatedData:any):Observable<any>
  {
    console.log(updatedData);
    
    return this._HttpClient.post(`http://localhost/cafe_project/controllers/product/update_product.php`,updatedData);
  }
  deleteProduct(id:number):Observable<any>
  {
    return this._HttpClient.delete(`http://localhost/cafe_project/controllers/product/delete_product.php?id=${id}`);
  }

}
