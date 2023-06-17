import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems:any[]=[];
  totalPrice:number=0;

  allUsers: any[] = []
  isAdmin:boolean = false;
  userId!:number  

  productQuantity:number=1;
  priceForOneProduct:any=15;

 totalPriceForOneProduct:any=this.priceForOneProduct
  constructor(private _CartService : CartService, private _UserService : UserService)
  {


        //check if user is admin
        let cuurentUserSate = localStorage.getItem("Admin")
    
        if(cuurentUserSate == "true")
        {
          this.isAdmin = true;
         
        }
        else
        {
          this.isAdmin = false;
         
        }
    ; 



  this.cartItems = this._CartService.items;
  this.increaseTotalPrice()
   
   
  

  }


  ngOnInit() {
    this._UserService.getAllUsers().subscribe(res => {
      

      
      
      this.allUsers = res.map((element: any) => {

        return {id: element.id, name: element.name};
      })

      console.log(this.allUsers);
      
      
    })


   
    
  }


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
      
      
      localStorage.removeItem('items')
      location.replace('/cart')
      
    })


  }

  getId (event: any) {
    this.userId = (Number(event.target.value));
  }


  Admincheckout()
  {
    
    this._CartService.addOrderToUser(this.userId).subscribe(res => {
      
      
      localStorage.removeItem('items')
      location.replace('/cart')
      
      
    })


  }



}
