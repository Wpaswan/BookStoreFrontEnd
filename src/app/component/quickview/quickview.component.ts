import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookdata: any;

  bookid: any;  // used as a variable to store book id's used in activated route part below

  feedbackArray: any;
  feedback: any;
  value: any;
 book:any[]=[]
  book_qty = 1;
  addtobag: boolean = true;
  quantity: boolean = false;
  public bookId$: Observable<any> // 'id' is bad name for variable, remember about code readability;
  | undefined // 'id' is bad name for variable, remember about code readability;

  constructor(private books: BookserviceService, private activatedroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    
    //this.bookid=localStorage.getItem("BookId") 
    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); // we are getting/storing bookid by using activated route part and not by using local storage as done and commented above
    console.log(this.bookid);

    this.getbook();
   
  }
  getbook() {

    this.books.usergetallbooks().subscribe((response: any) => {  // here even though the method is of getbook() we are calling the api integration of usergetallbooks() that is done previously in getallbooks.ts and then we are storing all books data in element by using forEach loop as below
     
      response.response.forEach((element: any) => {  // in element we are storing our entire bookdetails 
           console.log(element.bookId)
           this.book=element.response
           console.log(this.bookid)
        if (element.bookId == this.bookid) {  // here we are comparing entire book id (element._id) with one particular book id(this.bookid)
          this.bookdata = element;  // we are storing our entire book details in element and assigning to this.bookdata that is coming from quickview.html (bookdata.bookName, bookdata.author)
        }

      });

    });
  }

  addtocart() {
    this.addtobag = false;
    this.quantity = true;
    this.books.useraddtobag(this.bookid).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl('/dashboard/getcart')
  }
  addtowishlist() {
    this.books.useraddtowishlist(this.bookid).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl('/dashboard/getwishlist')
  }



}
