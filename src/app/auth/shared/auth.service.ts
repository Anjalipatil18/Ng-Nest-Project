import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import 'rxjs/Rx';

class DecodedToken{
  exp:number=0;
}

@Injectable()
export class AuthService{
  private decodedToken;

  constructor(private http:HttpClient){
    this.decodedToken=JSON.parse(localStorage.getItem('auth_meta'))||new DecodedToken();
  }

  private saveToken(formData:string):string{
    
    Object.entries(formData).map(([key, value]) => [key, value ])
    let data=formData['data']
    Object.entries(data).map(([key, value]) => [key, value ])
    let token=(data['token']);
    this.decodedToken = jwt.decode(token);

    localStorage.setItem('authToken',token);
    localStorage.setItem('auth_meta',JSON.stringify(this.decodedToken));

    return token;
  }

  public login(userData:any):Observable<any>{
    return this.http.post('https://dev-api.service-genie.xyz/customer/signIn',userData).map(
        (token: string) => this.saveToken(token)); 
  }

  public logout(){
    localStorage.removeItem('authToken');

    this.decodedToken=new DecodedToken();
}


  public isAuthenticated():boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }
  
}