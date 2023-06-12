import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems:any[]=[];
  constructor(private _CartService : CartService)
  {
    this.cartItems = this._CartService.items
  }
  quantity:number=1;
  priceForOneProduct:any=15;
  totalPriceForOneProduct:any=this.priceForOneProduct
  plusQuantity(product:any)
  {
    this.quantity++;
    this.totalPriceForOneProduct=this.priceForOneProduct*this.quantity
  }
  minusQuantity(product:any)
  {
    if(this.quantity>1)
    {
      this.quantity--;
    this.totalPriceForOneProduct=this.priceForOneProduct*this.quantity
    }
  }


  removeItem(product:any)
  {
    this._CartService.delete(product);
    alert("product removed from cart")
  }


}
