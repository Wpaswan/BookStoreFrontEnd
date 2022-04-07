import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 badgecount: any; // done for badge count
  fullName: any;
  isSearch = false; 
 
  constructor(private route: Router, private dataservice: DataService) {
    // this.fullName=localStorage.getItem("fullName");
    this.fullName = localStorage.getItem('fullName');
    //  this.fullName=localStorage.getItem('email');

  }


  ngOnInit(): void {
   
  }
  bookstore() {
    this.route.navigateByUrl("/dashboard/get-allbooks")
  }
  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  wishlist() {
    this.route.navigateByUrl("/dashboard/getwishlist")
  }
  getcart()
  {
    this.route.navigateByUrl("/dashboard/getcart")
  }
  orders()
  {
    this.route.navigateByUrl("/dashboard/orders")
  }
  Admin()
  {
    this.route.navigateByUrl("/dashboard/admin") 
  }
  clearFilter(search: any) {  // This is done for search pipe part in getallbooks and dashboard
    console.log(search);  //this .target.value is coming from console
    this.dataservice.sendData(search) // done for search pipe & this .target.value is coming from console
  }


}
