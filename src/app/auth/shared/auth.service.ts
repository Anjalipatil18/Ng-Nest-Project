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

    this.decodedToken=JSON.parse(localStorage.getItem('auth_meta')) ||new DecodedToken();
  }

  private saveToken(token:string):string{
    this.decodedToken = jwt.decode(token);

    localStorage.setItem('authToken',token);

    return token;
  }

  private getExpiration(){
    return moment.unix(this.decodedToken.exp);
  }

  public login(userData:any):Observable<any>{
    return this.http.post('https://dev-api.service-genie.xyz/customer/signIn',userData).map(
          (token: string) => this.saveToken(token));     
  }

  public logout(){
    localStorage.removeItem('authToken');
    
    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated():boolean {
    return moment().isBefore(this.getExpiration());
  }
  
}