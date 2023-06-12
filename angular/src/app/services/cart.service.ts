import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items:any[]= JSON.parse(localStorage.getItem('items')!);
  constructor() 
  { }

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
}
