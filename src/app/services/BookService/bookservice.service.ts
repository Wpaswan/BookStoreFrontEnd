import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  token: any;

  constructor(private httpService: HttpService) { // Here we create the object of http service in constructor because we are declaring our base url in httpservice.ts so by doing this we are accesing our base url in bookservice.ts
    this.token = localStorage.getItem("token")  // this token is taken from backend that is generated & stored in our local storage after we login & we are setting this token in our login.ts as localstorage.setitems
  }
  usergetallbooks() {
console.log("get all books is called")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('Book/getallbook', true, header)
  }
  useraddtobag(productID: any) {  //here we are using product id as it is used in backend API 

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.postService('Cart/addBooksInCart/' + productID, {}, true, header)
  }
  userwishlist() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.getService('WishList/getallBookinWishList', true, header)
  }
  useraddtowishlist(productID: any) {  //here we are using product id as it is used in backend API 

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('WishList/addBooksInWishList' + productID, {}, true, header)
  }usergetcartlist() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
        'Authorization': this.token
      })
    }
    return this.httpService.getService('Cart/getallbook', true, header)
  }

  userupdatequantity(productID: any, req: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.putService('Cart/updateCart' + productID, req, true, header)
  }

  userremovecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.deleteService('Cart/deleteCart' + productID, {}, true, header)
  }

  usercheckout(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('WishList/addBooksInWishList', data, true, header)
  }

 

  userremovewishlistitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.deleteService('WishList/removeBookinWishList/'+productID, {}, true, header)
  }

  useraddfeedback(productID: any, data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.postService('FeedBack/feedBack' + productID, data, true, header)
  }

  usergetfeedback(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('FeedBack/getallFeedBacks'+ productID, true, header)
  }
  adminaddbook(data: any) {
    this.token = localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('Book/addbooks', data, true, header)
  }
  adminupdatebook(bookId: any, data: any) {
    // this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.putService('Book/updatebooks', data, true, header)

  }

  admindeletebook(productID: any,token:any) {
    console.log(this.token,productID)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer'+this.token,   // use x-acces-token instead of authorization as it is coming from backend otherwise it will throw error
      })
    }
    return this.httpService.deleteService('Book/deletebook?BookId=' + productID, productID, true, header)
  }

  
}
