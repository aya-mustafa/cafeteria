import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items:any[]= [];

  id: any

  constructor(private _HttpClient:HttpClient) 
  { 
    
    
    //Get user Id
    let idFromLoacalStorge = localStorage.getItem("userId");
    let idOfCurrentUser = (Number(idFromLoacalStorge ))
    

    this.id = idOfCurrentUser;


    // Get cart items
    let  localStorageItem:any = localStorage.getItem('items');
    if(localStorageItem)
    {
      this.items= JSON.parse(localStorage.getItem('items')!);
    }

  }



  addToCart(product:any)
  {
    this.items.push(product);
    localStorage.setItem('items',JSON.stringify(this.items));
  }
  delete(item:any)
  {
    this.items.splice(item,1);
    localStorage.setItem('items',JSON.stringify(this.items));
  }

  addOrder (): Observable<any> {
    
    // filter data to backend 
    const filteredProducts = this.items.map(({p_id,p_quantity }) => {

      return {id: p_id, quantity: p_quantity};
      
    } )    
  
    return this._HttpClient.post(`http://localhost/cafe_project/controllers/orders/addorderController.php`, {
      userID: this.id,
      products: filteredProducts
    });
  }
  
  addOrderToUser (id: number): Observable <any> {
 // filter data to backend 
 
  const filteredProducts = this.items.map(({p_id,p_quantity }) => {

  return {id: p_id, quantity: p_quantity};
  
  } )    


    return this._HttpClient.post(`http://localhost/cafe_project/controllers/orders/addorderController.php`, {
      userID: id,
      products: filteredProducts
    })

  }
}
