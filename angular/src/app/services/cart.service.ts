import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items:any[]=[];
  constructor() 
  { 

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
}
