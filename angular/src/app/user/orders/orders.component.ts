import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {


  constructor()
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
