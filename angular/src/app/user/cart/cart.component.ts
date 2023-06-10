import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  quantity:number=1;
  priceForOneProduct:any=15;
  totalPriceForOneProduct:any=this.priceForOneProduct
  plusQuantity()
  {
    this.quantity++;
    this.totalPriceForOneProduct=this.priceForOneProduct*this.quantity
  }
  minusQuantity()
  {
    if(this.quantity>1)
    {
      this.quantity--;
    this.totalPriceForOneProduct=this.priceForOneProduct*this.quantity
    }
  }
}
