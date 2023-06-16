import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {


  constructor(private _OrderService :OrderService)
  {
 


  }




  orders:any[]=
  [
    {date:"23-9-2022",}
  ]

  getStartDate()
  {
    let startDate:any= document.getElementById("startDate");
    console.log(startDate.value);
  }

  getEndDate()
  {
    let startDate:any= document.getElementById("endDate");
    console.log(startDate.value);
  }

}
