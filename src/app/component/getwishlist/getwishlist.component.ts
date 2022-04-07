import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {
  wishlistitem:any[]=[];
  countlist:any;

  constructor(private books: BookserviceService) { }

  ngOnInit(): void {
    this.getwishlist();
  }

   getwishlist(){
     this.books.userwishlist().subscribe((response:any)=>{
       console.log(response.response);
       this.wishlistitem=response.response
      console.log(this.wishlistitem)
      //  this.wishlistitem.reverse()
      //  this.countlist=response.result.length
       
     })
   }

   removewishlistitem(book: any) {
     console.log(book.wishListId)
    this.books.userremovewishlistitem(book.wishListId).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })
    // this.getwishlist();
  }
}
