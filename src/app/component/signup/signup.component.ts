import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservise/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
      selectoption: ['', Validators.required],
      
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      let payload = {    //this payload is a json object

        fullName: this.signupForm.value.fullName, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        
        phNo: this.signupForm.value.mobileNo,
        emailId: this.signupForm.value.email,
        password: this.signupForm.value.password,
       
         

      }
      if (this.signupForm.value.selectoption == '1') {
        this.user.register(payload).subscribe((response: any) => {    //subscribe is a method from observable
          console.log(response)

         
        })
      } 
    else {
      console.log("enter data");
    }
      
      }
  }


  }

 


