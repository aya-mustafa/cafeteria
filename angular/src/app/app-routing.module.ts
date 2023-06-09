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
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryComponent } from './user/category/category.component';
import { CategoryDetailsComponent } from './user/category-details/category-details.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'category',component:CategoryComponent},
  {path:'categoryDetails/:id',component:CategoryDetailsComponent},
  {path:'products',component:ProductComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
