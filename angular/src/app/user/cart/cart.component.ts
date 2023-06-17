import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems:any[]=[];
  totalPrice:number=0;
  constructor(private _CartService : CartService)
  {
    this.cartItems = this._CartService.items;
   this.increaseTotalPrice()
   
  }
  productQuantity:number=1;
  priceForOneProduct:any=15;

 totalPriceForOneProduct:any=this.priceForOneProduct
  plusQuantity(product:any)
  {
    let price = Number(product.price);
    product.p_quantity++;
    price = product.p_quantity*price;
    this.increaseTotalPrice()
  }
  minusQuantity(product:any)
  {
    if(product.p_quantity>1)
    {
      let price = Number(product.price);
      product.p_quantity--;
      price = product.p_quantity*price;
      this.decreaseTotalPrice()
    }
  }
  resetCount(product:any)
  {
    product.p_quantity=1;
    product.price = product.p_quantity * product.price;
  }


  increaseTotalPrice()
  {
    for(var i=0;i<this.cartItems.length;i++)
    {
      //console.log(this.cartItems[i].price)
      this.totalPrice+= Number(this.cartItems[i].price);
    }
  }


  decreaseTotalPrice()
  {
    for(var i=0;i<this.cartItems.length;i++)
    {
      //console.log(this.cartItems[i].price)
      this.totalPrice-= Number(this.cartItems[i].price);
    }
  }



  removeItem(product:any)
  {
    this._CartService.delete(product);
    alert("product removed from cart")
  }

  checkout()
  {
    
    this._CartService.addOrder().subscribe(res => {
      console.log(res);
      
      localStorage.removeItem('items')
      location.replace('/cart')
      
    })


  }
}
