import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private http:HttpService) {  this.token = localStorage.getItem("token") }
  getHeaders = () => {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('BookStore')}`,
      }),
    };
  }

 

  
  register(req: any){
    console.log("user payload", req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        ///'Authorization':'token'
      })
    }
    return this.http.postService('Users/register', req, false, header)
  }
  userlogin(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.http.postService('User/Login', data, false, header)
  }

 
   forgotpassword(data: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
        
      })
    }
    var url='User/ForgotPassword?EmailId='+data.EmailId
    return this.http.postService(url,null,false,header);
  }
  
  usergetcartlist() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.getService('Cart/getallbook', true, header)
  }
  useraddress(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  //request and response are in the format of json means key-value pair
        'x-access-token': 'this.token'
      })
    }
    return this.http.postService('edit_user', data, false, header)
  }
  resetPassword(req:any,token:any){
    console.log("user payload",req);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'token'
      })
    }
    return this.http.postService('User/ResetPassword',req, true, {header})
  }
  adminlogin(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  //request and response are in the format of json means key-value pair
      })
    }
    return this.http.postService('Admin/Login', data, false, header)
  }
}
