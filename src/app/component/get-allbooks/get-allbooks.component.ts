import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { UserService } from 'src/app/services/userservise/user.service';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/dataservice/data.service';



@Component({
  selector: 'app-get-allbooks',
  templateUrl: './get-allbooks.component.html',
  styleUrls: ['./get-allbooks.component.scss']
})
export class GetAllbooksComponent implements OnInit {
  page:number = 1;
  totalLength:any;
  countbooks:any; //we are just binding data using string interpolation between getallbooks.html and getaalbooks.ts
  BookQuanity:number = 0;
  books:any;  // used as a variable to store id of books 
    booksArray:any[]=[];
    bookid:any;  // used as a variable to store book id's used in activated route part below
    searchword: any;  // done for search pipe part
    cartbooks:any;
    cartBooksIdList:any[] = []; // this is done for added to bag button part and we are taking array[] because below we are using push function and push function works on array only
    userId:any
  constructor(private service:UserService,
    private router:Router,
    private acRoute:ActivatedRoute,private book:BookserviceService,private activatedroute: ActivatedRoute, private dataservice:DataService) {  }

    getBooks(){
      this.book.usergetallbooks().subscribe((dataReturned:any)=>{
        console.log("value",dataReturned);
        this.booksArray = dataReturned.response;
        console.log("returning data",this.booksArray);

        this.countbooks=dataReturned.response.length  //.length is used because the count of number of books is stored inside length we can see that in console at the endof the books array length:20 is written
        this.totalLength=dataReturned.response.length  // done for pagination part
        console.log("Total Books",this.countbooks)
        console.log("Length",this.totalLength)
        this.booksArray.forEach((element:any) => {  // in element we are storing our entire bookdetails 
          console.log(element.bookId);
         
     
          
        
          
          
          
        });
     
        
         
         
       });
       
    }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((response:any)=>{  //this is done for search pipe part & this received Data is coming from data service.ts for unrelated data sharing as our dashboard.ts and getall books don't have any relationship
      console.log(response)
    
          this.searchword = response;
          console.log(this.searchword);
     
   });
    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); 
    this.userId=this.activatedroute.snapshot.paramMap.get("userId");
    this.getBooks();
   
  
  }
  quickview(books:any){  //used as a variable to store id of books used below in localstorage as book._id

    localStorage.setItem('bookId', books.bookId);  // _id is coming from console means from backend we are setting our _id of book in book variable declared above and in parenthesis of quickview() annd we will get it in quick view.ts component
    this.router.navigateByUrl('/dashboard/quickview/' + books.bookId) //due to this after clicking on any book image in getallbooks we will be redirected to the quickview of that particular book 
    

  }
  getcartlist() {  //We are again calling this getcartlist api here in getall books.ts for this added to bag and map function part done above

    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response.response);
      
      this.cartbooks = response.result;
      response.response.forEach((element:any)=> {
        this.cartBooksIdList.push(element["product_id"]._id)  // this[product_id] we are taking because in browser in console we can see whatever the bookid we want it is stored inside element(i.e., 0,1,2,3...) inside product_id and inside that there is our desired bookid
      })
    })
    
     
  }
  addtocart(book:any){
    this.books.useraddtobag(book.bookId).subscribe((response:any) =>{
      console.log(response);
      
    })
     this.router.navigateByUrl('/dashboard/getcart' )
  }
  showDescription(bookId:number){
    this.router.navigate([`dashboard/bookdetails`]);
  }
 
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice); //.price is coming from backend api
  }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }

}
