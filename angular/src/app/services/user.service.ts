import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, private _router : Router) {
  }
  getAllUsers():Observable<any>
  {
    return this._http.get('http://localhost/cafeteria(Backend)/Cafe-Api/users/read.php');
  }
  getOneUsers(id:number):Observable<any>
  {
    return this._http.get(`http://localhost/cafeteria(Backend)/Cafe-Api/users/read.php/?id=${id}`);
  }
  addUser(data:any):Observable<any>
  {
    return this._http.post(`http://localhost/cafeteria(Backend)/Cafe-Api/users/create.php`,data);
  }
  updateUser(id:number,updatedData:any):Observable<any>
  {
    return this._http.put(`http://localhost/cafeteria(Backend)/Cafe-Api/users/update.php/?id=${id}`,updatedData);
  }
  deleteUser(id:number):Observable<any>
  {
    return this._http.delete(`http://localhost/cafeteria(Backend)/Cafe-Api/users/delete.php/?id=${id}`);
  }
}
