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
import { UsersComponent } from './admin/users/users.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { AuthService } from './services/auth.service';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ChecksComponent } from './admin/checks/checks.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
AdminOrdersComponent

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'category',component:CategoryComponent,canActivate:[AuthService]},
  {path:'categoryDetails/:id',component:CategoryDetailsComponent,canActivate:[AuthService]},
  {path:'products',component:ProductComponent,canActivate:[AuthService]},
  {path:'productDetails/:id',component:ProductDetailsComponent,canActivate:[AuthService]},
  {path:'cart',component:CartComponent,canActivate:[AuthService]},
  {path:'orders',component:OrdersComponent,canActivate:[AuthService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  

  {path:'admin/users',component:UsersComponent,canActivate:[AuthService]},
  {path:'admin/products',component:ProductAdminComponent,canActivate:[AuthService]},
  {path: 'admin/orders', component:AdminOrdersComponent},
  {path:'checks',component:ChecksComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
