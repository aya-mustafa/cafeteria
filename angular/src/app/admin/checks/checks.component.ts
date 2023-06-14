import { Component, Input } from '@angular/core';
import { Checks } from 'src/app/interfaces/checks';
import { ChecksService } from 'src/app/services/checks.service';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent {

  @Input() dateFrom :string = '2022-01-01';
  @Input() dateTo :string = '2024-01-01';

  date0 = new Date('2023-05-01');
  date1 = new Date('2023-05-02');
  date3 = new Date('2023-08-04');

  // originalUsers = [
  //   {
  //     user_name:"ahmed",
  //     orderDate: this.date0,
  //     orderPrice:"10",
  //     totalOfOrdersPrices: "25",
  //     orderItem:"tea"
      
  //   },
  //   {
  //     name:"ahmed",
  //     orderDate: this.date0,
  //     orderPrice:"15",
  //     totalOfOrdersPrices: "25",
  //     orderItem:"cofe"  
  //   },
  //   {
  //     name:"ahmed",
  //     orderDate: this.date1,
  //     orderPrice:"50",
  //     totalOfOrdersPrices: "65",
  //     orderItem:"pizza"
      
  //   },
  //   {
  //     name:"ahmed",
  //     orderDate: this.date1,
  //     orderPrice:"15",
  //     totalOfOrdersPrices: "65",
  //     orderItem:"burger"  
  //   },
  //   {
  //     name:"sami",
  //     orderDate: this.date3,
  //     orderPrice:"40",
  //     totalOfOrdersPrices: "40",
  //     orderItem:"hotdog"  
  //   }

  // ];
  // users = this.originalUsers;
  originalUsers!: Checks[]
  users!: Checks[];
  userName = "";
  allNames:any = []; 

  filteredWithName: Checks[] = [];

  ordersDate:any = [];

  filteredWithOrder: Checks[] = [];

  itemss:any = [];
  orderD = new Date();
  constructor(private ChecksService: ChecksService){
    //this.users = this.originalUsers.filter(x=> x.date<= new Date(this.dateTo) && x.date>= new Date(this.dateFrom));
    ChecksService.getChecks().subscribe((res)=>
    {
      //console.log(res);
      this.users = res;
      
      this.originalUsers =res;
      this.users = this.originalUsers.filter(x=> new Date(x.date)<= new Date(this.dateTo) && new Date(x.date)>= new Date(this.dateFrom));
      this.allNames = [...new Set(this.users.map(item => item.user_name))]; 

    this.filteredWithName = this.users.filter(x=> x.user_name ===this.userName);
  
    this.ordersDate = [...new Set(this.filteredWithName.map(item => item.date))];
  
    this.filteredWithOrder = this.filteredWithName.filter(x=>x.date === this.orderD);
  
    this.itemss = [...new Set(this.filteredWithOrder.map(item => item.date))];
    })
  }
 



  // allNames = [...new Set(this.users.map(item => item.name))]; 

  // filteredWithName: Checks[] = this.users.filter(x=> x.name ===this.userName);

  // ordersDate = [...new Set(this.filteredWithName.map(item => item.date))];

  // filteredWithOrder: Checks[] = [];

  // itemss:any = [];
  ngOnInit(){
    
  }
 changeDate(){
  this.users = this.originalUsers.filter(x=> new Date(x.date)<= new Date(this.dateTo) && new Date(x.date)>= new Date(this.dateFrom))

  this.allNames = [...new Set(this.users.map(item => item.user_name))]; 

  this.filteredWithName = this.users.filter(x=> x.user_name ===this.userName);

  this.ordersDate = [...new Set(this.filteredWithName.map(item => item.date))];

  this.filteredWithOrder = this.filteredWithName.filter(x=>x.date === this.orderD);

  this.itemss = [...new Set(this.filteredWithOrder.map(item => item.date))];

 }
  


  changeName($name: string){
    this.userName = $name;
    this.allNames = [...new Set(this.users.map(item => item.user_name))]; 

    this.filteredWithName = this.users.filter(x=> x.user_name ===this.userName);
  
    this.ordersDate = [...new Set(this.filteredWithName.map(item => item.date))];
  
    this.filteredWithOrder = this.filteredWithName.filter(x=>x.date === this.orderD);
  
    this.itemss = [...new Set(this.filteredWithOrder.map(item => item.date))];
    //console.log("here");
  }

  changeOrder($order: Date){
    this.orderD = $order;

  

  
    this.filteredWithOrder = this.filteredWithName.filter(x=>x.date === this.orderD);
  
    this.itemss = [...new Set(this.filteredWithOrder.map(item => item.name))];
  }

  itemPrice(name: string){
    let price = this.filteredWithOrder.find(x=> x.name === name)?.price;

   return price;
  }

  orderPrice(date: Date){
    let parsedDate = new Date(date);
    
    

    let price = this.filteredWithName.find(x=> JSON.stringify(new Date(x.date)) == JSON.stringify(parsedDate))?.total;
    //console.log(`${JSON.stringify(new Date(this.filteredWithName[0].date))} == ${JSON.stringify(parsedDate)}`);
    //console.log(price);

    return price;
  }

  totalUser(name:string){
    
  }
}
