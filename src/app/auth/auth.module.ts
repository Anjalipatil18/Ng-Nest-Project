import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import  {CommonModule} from '@angular/common';

import { LoginComponent } from './login/login.component';
import {AuthComponent} from './auth.component';

import {AuthService} from './shared/auth.service';

const routes:Routes=[
    {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
    
  ],
})
export class AuthModule { }
