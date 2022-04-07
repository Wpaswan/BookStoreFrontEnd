import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';      //its a parent module for form control, form builder
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {   MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { GetAllbooksComponent } from './component/get-allbooks/get-allbooks.component';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { GetcartComponent } from './component/getcart/getcart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './component/orders/orders.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { OrderplacedsuccessfullyComponent } from './component/orderplacedsuccessfully/orderplacedsuccessfully.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { PipePipe } from './component/pipe/pipe.pipe';
import { AdminComponent } from './component/admin/admin.component';
import { AdminAddandupdateComponent } from './component/admin-addandupdate/admin-addandupdate.component';
import { MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    GetAllbooksComponent,
    GetwishlistComponent,
    GetcartComponent,
    OrdersComponent,
    ForgotpasswordComponent,
    QuickviewComponent,
    OrderplacedsuccessfullyComponent,
    ResetpasswordComponent,
    PipePipe,
    AdminComponent,
    AdminAddandupdateComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatBadgeModule ,
    HttpClientModule,
    MatExpansionModule,
    MatRadioModule,
    NgxPaginationModule,
    CommonModule,
    MatSnackBarModule,
    MatDialogModule
      
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
