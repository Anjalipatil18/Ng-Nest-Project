import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule}  from '@angular/router';

import { AppComponent } from './app.component';
import{HeaderComponent} from './common/header/header.component';
import { HomeComponent } from './home/home.component';

import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';

import { AppRoutingModule } from './/app-routing.module';

const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HomeModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
