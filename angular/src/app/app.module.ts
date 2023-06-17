import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CategoryComponent } from './user/category/category.component';
import { CategoryDetailsComponent } from './user/category-details/category-details.component';
import { ProductComponent } from './user/product/product.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { UsersComponent } from './admin/users/users.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { ChecksComponent } from './admin/checks/checks.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserSearchPipe } from './pipes/user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    OrdersComponent,
    SearchPipe,
    ProductAdminComponent,
    UsersComponent,
    CategoryAdminComponent,
    ChecksComponent,
    
    AdminOrdersComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    UserOrderComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
