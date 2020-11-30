import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors:any[]=[];

  constructor(private fb: FormBuilder,
              private auth:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      
      username: ['admin', [Validators.required]],
   
      password: ['123', [Validators.required]]
    })
  }

  isInvalidForm(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
           (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required
  }
  
  login(){
    const val = this.loginForm.value;
    this.auth.login(val.username, val.password)
      if(val.username==="admin" && val.password==="123"){
        this.router.navigateByUrl('/home');
        console.log("login successsful...")
      }else{
        console.log("Login failed:");
        alert('Login failed.');
    
      }
  }
}
