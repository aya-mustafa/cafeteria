import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {


  orders: any[] = [];

  products: any[] = []

  showTable:boolean = false;



 

    constructor(private _OrderService :OrderService)
  {
    let idFromLoacalStorge = localStorage.getItem("userId");
    let idOfCurrentUser = (Number(idFromLoacalStorge ))
    


    _OrderService.getOrdersOfUser(idOfCurrentUser).subscribe(res=> {


    this.orders = res.data;
    this.addTotalAmount(this.orders);

    this.filterDate(this.orders);
    
    })
    

    

  }


 addTotalAmount (products: any) {
 

  
  let totalamount = products.reduce((accumlator: number, current: any ):number =>{

    const sum = accumlator + Number(current.price);

    return sum;
  } ,0);
  
  return totalamount;
  
 }


 deleteUserOrder (id: any)  {
  this._OrderService.deleteOrder(id).subscribe(res => {
   
    
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
   
   
   this.orders = filteredOrders;
  }

  showProducts(orderId:number) {



   const product = this.orders.filter(ele => ele.orderID == orderId);


   
   
  this.products = product[0].products; 
  console.log(this.products);
  
  this.showTable = true
  }


}
