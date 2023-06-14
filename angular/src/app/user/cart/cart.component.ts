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
    this.getTotalPrice()
  }
  productQuantity:number=1;
  priceForOneProduct:any=15;
  totalPriceForOneProduct:any=this.priceForOneProduct
  plusQuantity(product:any)
  {
    product.p_quantity++;
    product.price = product.p_quantity * product.price;
    this.getTotalPrice()
  }
  minusQuantity(product:any)
  {
    if(product.p_quantity>1)
    {
      product.p_quantity--;
      product.price = product.p_quantity * product.price;
      this.getTotalPrice()
    }
  }
  resetCount(product:any)
  {
    product.p_quantity=1;
    product.price = product.p_quantity * product.price;
  }


  getTotalPrice()
  {
    for(var i=0;i<this.cartItems.length;i++)
    {
      this.totalPrice+= Number(this.cartItems[i].price*this.cartItems[i].p_quantity);
    }
  }

  removeItem(product:any)
  {
    this._CartService.delete(product);
    alert("product removed from cart")
  }


}
