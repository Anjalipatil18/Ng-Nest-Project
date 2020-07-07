import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router,ActivatedRoute} from '@angular/router';


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
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      
      emailOrPhone: ['', [Validators.required,
                          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      deviceId:'12345',
      devType:3,
      loginType: 1,
      password: ['', Validators.required]
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
    
    this.auth.login(this.loginForm.value).subscribe(
      (token)=>{
        console.log(token)
        this.router.navigate(['/home']);
      // },
      // (errorResponse)=>{
      //   this.errors=errorResponse.error.errors;
      // }
    // )
       } )
  }
}