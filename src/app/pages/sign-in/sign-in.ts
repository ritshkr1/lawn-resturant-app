import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn implements OnInit {
  constructor(private fb: FormBuilder, private route: Router) {}

  loginForm!: FormGroup;
  data: any;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.route.navigateByUrl('/dashboard')
  }
}
