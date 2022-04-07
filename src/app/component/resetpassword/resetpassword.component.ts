import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservise/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  submitted =false;
  token:any;
  constructor(private formBuilder: FormBuilder,private UserService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);

  }
  onResetSubmit() {
    this.submitted=true
    if (this.resetPasswordForm.valid) {
      console.log("Reset password method calling", this.resetPasswordForm.value);
      let req={
        
        password:this.resetPasswordForm.value.password,
        confirmPassword:this.resetPasswordForm.value.confirmPassword
        
      }
      console.log(req);
      this.UserService.resetPassword(req,this.token).subscribe((res:any)=>{
        console.log(res);
      })
    }
    
    else {
      console.log("Password is not valid", this.resetPasswordForm.value);
      return;
    }
  }

}
