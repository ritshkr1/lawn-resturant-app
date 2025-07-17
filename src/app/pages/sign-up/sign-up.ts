import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  signUpForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private route: Router){}

  signUp(){
    console.log(this.signUpForm.value);
    this.route.navigateByUrl('/sign-in')
  }
}
