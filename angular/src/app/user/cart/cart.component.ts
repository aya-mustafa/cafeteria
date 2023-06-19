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
  totalPrice!:number

  allUsers: any[] = []
  isAdmin:boolean = false;
  userId!:number  

  productQuantity:number=1;
 


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
  
   
   
  

  }


  ngOnInit() {
    this._UserService.getAllUsers().subscribe(res => {
      

      
      
      this.allUsers = res.map((element: any) => {

        return {id: element.id, name: element.name};
      })

      console.log(this.allUsers);
      
      
    })

    
    this.totalPrice=this.calculateTotal(this.cartItems);
    
    this.cartItems.forEach(product => this.resetCount(product));
   
    
  }

  calculateTotal (items : any) {

    console.log(items);
    
    let totalamount = items.reduce((accumlator: number, current: any ):number =>{

      const sum = accumlator + (Number(current.price) );
  
      return sum;
    } ,0);
    
    console.log(totalamount);
    
    return totalamount;
    
  }

  plusQuantity(product:any)
  {
    let price = Number(product.price);
    product.p_quantity++;
    price = product.p_quantity*price;
    this.increaseTotalPrice(product)
  }
  minusQuantity(product:any)
  {
    if(product.p_quantity>1)
    {
      let price = Number(product.price);
      product.p_quantity--;
      price = product.p_quantity*price;
      this.decreaseTotalPrice(product);
    }
  }
  resetCount(product:any)
  {
    product.p_quantity=1;
    product.price = product.p_quantity * product.price;
  }


  increaseTotalPrice(product : any)
  {

    console.log(product);
   this.totalPrice += product.price;
  }


  decreaseTotalPrice(product : any)
  {
    this.totalPrice -= product.price;
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
