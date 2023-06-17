import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {


  orders: any[] = [];


 

    constructor(private _OrderService :OrderService)
  {
    let idFromLoacalStorge = localStorage.getItem("userId");
    let idOfCurrentUser = (Number(idFromLoacalStorge ))
    console.log(idOfCurrentUser)


    _OrderService.getOrdersOfUser(idOfCurrentUser).subscribe(res=> {


    this.orders = res.data;
    this.addTotalAmount(this.orders);

    this.filterDate(this.orders);
    })
    

    

  }


 addTotalAmount (products: any) {
  console.log(products);
  
  let totalamount = products.reduce((accumlator: number, current: any ):number =>{

    const sum = accumlator + current.price;

    return sum;
  } ,0);
  
  return totalamount;
  
 }


 deleteUserOrder (id: any)  {
  this._OrderService.deleteOrder(id).subscribe(res => {
    console.log(res);
    
  })
  location.replace('/orders')
 }





  getStartDate()
  {
    let startDate:any= document.getElementById("startDate");

    let date =  new Date(startDate.value);
  
    let formatDate = date.toISOString().slice(0, 19).replace('T', ' ');
   
    
   
    
   return formatDate;
  }

  getEndDate()
  {
    let endDate:any= document.getElementById("endDate");

    let date =  new Date(endDate.value);
  
    let formatDate = date.toISOString().slice(0, 19).replace('T', ' ');
   

   return formatDate;
  }


  filterDate(orders: any) {

   const filteredOrders = orders.filter((element : any)=>{
   return  element.date<= this.getEndDate() && element.date >= this.getStartDate()

   } );                                                          
   
   console.log(filteredOrders);
   
   this.orders = filteredOrders;
  }

  


}
