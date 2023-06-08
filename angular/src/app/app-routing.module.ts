import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { OrdersComponent } from './user/orders/orders.component';
import { CartComponent } from './user/cart/cart.component';
import { ProductComponent } from './user/product/product.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
