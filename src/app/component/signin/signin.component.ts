import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservise/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide: boolean = true;
  submitted: boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService : UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

    openSnackBar(message: string, duration: number) {
      let config = new MatSnackBarConfig();
      if (duration != 0)
      {
        config.duration = duration; 
      }
      this.snackBar.open(message, undefined, config);
    } 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
    });
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    let requestData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    // this.userService.login(requestData).subscribe((response:any)=>
    // {
    //     console.log(response);
    //     localStorage.setItem('Token',response.result.accessToken);
    //     this.router.navigate(['dashboard']);

    // })
    // this.userService.login(requestData).subscribe(response => console.log(response));
    
    // this.openSnackBar('Login success', 2000);
   
    // console.log(response);

  }
}
