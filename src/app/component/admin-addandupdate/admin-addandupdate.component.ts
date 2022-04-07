import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/BookService/bookservice.service';

@Component({
  selector: 'app-admin-addandupdate',
  templateUrl: './admin-addandupdate.component.html',
  styleUrls: ['./admin-addandupdate.component.scss']
})
export class AdminAddandupdateComponent implements OnInit {
  addandupdateForm!: FormGroup;
  submitted = false;

  // isAddBook=true;

  constructor(private formbuilder: FormBuilder, private books: BookserviceService, private route: Router,
    public dialogRef: MatDialogRef<AdminAddandupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   // this data is coming from display notes.ts as we are injecting here from display.ts
  ) { }

  ngOnInit(): void {
    this.addandupdateForm = this.formbuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountprice: ['', Validators.required],

    });

    if (this.data?.bookobject != null) { // this data? is coming from admin.ts from open dialog of updatebook and bookobject is coming from admin.ts data:bookobject
      this.addandupdateForm.patchValue({  //patch value works on key-value format and patch value will only update the matching objects and ignores the rest
        bookname: this.data?.bookobject['bookName'], // leftside is formcontrol name and right side['bookName'] is coming from *ngFor admin.component.html
        authorName: this.data?.bookobject['author'],
        bookDescription: this.data?.bookobject['description'],
        discountPrice:+this.data?.bookobject['discountPrice'],
        originalPrice:+ this.data?.bookobject['price'],
        bookCount:+ this.data?.bookobject['quantity']
        
      })
    }

  }
  addandupdate() {
    this.submitted = true;
    if (this.addandupdateForm.valid) {
      console.log(this.addandupdateForm.value);
      let reqdata = {
        bookName: this.addandupdateForm.value.bookname, // leftside bookName is exactly same as that of backend API and rightside bookname i.e.,bookname should be exact same as that of formcontrolname in admin-addandupdate.html file or same as written above in ngonit 
        authorName: this.addandupdateForm.value.author,
        bookDescription: this.addandupdateForm.value.description,
       bookCount: +this.addandupdateForm.value.quantity,
       originalPrice:+ this.addandupdateForm.value.price,
        discountPrice: +this.addandupdateForm.value.discountprice,
        Rating:4.5,
        Reviewer:23,
        Image:' ',
      
        

      }
      if (this.data.isAddBook) {
        this.books.adminaddbook(reqdata).subscribe((response: any) => {
          console.log(response);

          //  localStorage.setItem('token', response.result.accessToken)
          // this.route.navigateByUrl('dashboard/admin')

            window.location.reload();
        });
        

      } else{
        this.books.adminupdatebook(this.data.bookobject._id,reqdata).subscribe((response:any) => {  //._id is used because we are updating the particular product by its id & .data.bookobject is coming from admin.ts from update() method from data: {bookobject}
          console.log(response);
  
          //  localStorage.setItem('token', response.result.accessToken)
            // this.route.navigateByUrl('dashboard/admin')
         
             window.location.reload();
        });
      }
      
    }

  }
  close(): void {
    this.dialogRef.close()
  }

}
