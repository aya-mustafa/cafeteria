import { Component } from '@angular/core';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent {
  users = [
    {
      name:"ahmed",
      orderDate: "date0",
      orderPrice:"10",
      totalOfOrdersPrices: "20",
      orderItem:"tea"
      
    },
    {
      name:"ahmed",
      orderDate: "date0",
      orderPrice:"15",
      totalOfOrdersPrices: "20",
      orderItem:"cofe"  
    },
    {
      name:"ahmed",
      orderDate: "date1",
      orderPrice:"50",
      totalOfOrdersPrices: "50",
      orderItem:"pizza"
      
    },
    {
      name:"ahmed",
      orderDate: "date1",
      orderPrice:"15",
      totalOfOrdersPrices: "50",
      orderItem:"burger"  
    },
    {
      name:"sami",
      orderDate: "date3",
      orderPrice:"40",
      totalOfOrdersPrices: "40",
      orderItem:"hotdog"  
    }

  ];

  userName = "ahmed"

  orderD = "date0"

  allNames = [...new Set(this.users.map(item => item.name))]; 

  filteredWithName = this.users.filter(x=> x.name ===this.userName);

  ordersDate = [...new Set(this.filteredWithName.map(item => item.orderDate))];

  filteredWithOrder = this.filteredWithName.filter(x=>x.orderDate === this.orderD);

  itemss = [...new Set(this.filteredWithOrder.map(item => item.orderItem))];



}
