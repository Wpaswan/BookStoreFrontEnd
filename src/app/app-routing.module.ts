import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllbooksComponent } from './component/get-allbooks/get-allbooks.component';
import { AuthenticationGuard } from './component/authentication.guard';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { OrderplacedsuccessfullyComponent } from './component/orderplacedsuccessfully/orderplacedsuccessfully.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminAddandupdateComponent } from './component/admin-addandupdate/admin-addandupdate.component';

const routes: Routes = [
  { path:'', redirectTo:"/dashboard", pathMatch:'full'}, //this is done so whenever we will do ng serve at first login page should open and then after logging in we should get redirected to dashboard page
  { path:'signup',component:SignupComponent,
  children: [
    { path: 'login', component: LoginComponent
   },  
  ],},
  { path:'', redirectTo:"/login", pathMatch:'full'}, //this is done so whenever we will do ng serve at first login page should open and then after logging in we should get redirected to dashboard page
  { path:'signup',component:SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path: 'login', component: LoginComponent},
  { path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
   children:[
   { path:'', redirectTo:"/dashboard/get-allbooks", pathMatch:'full'},
   { path:'get-allbooks',component:GetAllbooksComponent},
   { path:'quickview/:bookId',component:QuickviewComponent}, 
   { path:'getwishlist',component:GetwishlistComponent},
   { path:'getcart',component:GetcartComponent },
   { path:'orders',component:OrdersComponent },
   { path:'orderplacedsuccessfully',component:OrderplacedsuccessfullyComponent},
   { path:'admin',component:AdminComponent},
   { path:'addandupdate',component:AdminAddandupdateComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
