import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {


  @Input() dateFrom :string = '2022-01-01';
  @Input() dateTo :string = '2024-01-01';


  orders: any[] = [];

  originalOrders: any[] = [];

  products: any[] = []

  showTable:boolean = false;



 

    constructor(private _OrderService :OrderService)
  {
    let idFromLoacalStorge = localStorage.getItem("userId");
    let idOfCurrentUser = (Number(idFromLoacalStorge ))
    
    _OrderService.getAllOrders().subscribe(res=> {

      this.originalOrders = res.data;
      this.orders = res.data;
      console.log(res.data);
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


  changeDate(){
    let filterDateOrder = this.originalOrders.filter(x=> new Date(x.date)<= new Date(this.dateTo) && new Date(x.date)>= new Date(this.dateFrom));
    this.orders = filterDateOrder;
    console.log(filterDateOrder);
  }
}
