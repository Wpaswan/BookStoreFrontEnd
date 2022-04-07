import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminAddandupdateComponent } from '../admin-addandupdate/admin-addandupdate.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  count: any;
  allbooks: any[]=[];
  booksArray:any[]=[];
  bookid:any;  // used as a variable to store book id's used in activated route part below
  bookName: any;
  author: any;
  description: any;
  quantity: any;
  price: any;
  discountPrice: any;
  isAddBook: any;
  token:any
  
  constructor(private books:  BookserviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getallbooks();
  }


  getallbooks() {
    this.books.usergetallbooks().subscribe((dataReturned:any)=>{
      console.log("value",dataReturned);
      this.booksArray = dataReturned.response;
      console.log("returning data",this.booksArray);

    // this.books.usergetallbooks().subscribe((response: any) => {
    //   console.log(response.result);
    //   this.allbooks = response.result.data
    //   console.log(this.allbooks)

      // this.count=response.result.length //.length is used because the count of number of books is stored inside length we can see that in console at the endof the books array length:20 is written


      // localStorage.setItem('bookId', book._id);

    })
  }

  // this below code is used to update the note i.e.,updatecomponent
  AddBook(): void {
    const dialogRef = this.dialog.open(AdminAddandupdateComponent, {
      width: '650px',
      height: '460px',
      data: { isAddBook: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bookName = result;
      this.author = result;
      this.description = result;
      this.quantity = result;
      this.price = result;
      this.discountPrice = result;

    });


  }
  UpdateBook(bookobject: any): void {
    const dialogRef = this.dialog.open(AdminAddandupdateComponent, {
      width: '650px',
      height: '460px',
      data: { bookobject, isAddBook: false },
    });
    console.log("books data is", bookobject);



    dialogRef.afterClosed().subscribe(result => {
      //  console.log('The dialog was closed');
      this.bookName = result;
      this.author = result;
      this.description = result;
      this.quantity = result;
      this.price = result;
      this.discountPrice = result;

    });


  }
 

  deletebook(book: any) {
    this.books.admindeletebook(book.bookId,this.token).subscribe((response: any) => {
      console.log(response);

      window.location.reload();
    });
  }
 

 
  

}
