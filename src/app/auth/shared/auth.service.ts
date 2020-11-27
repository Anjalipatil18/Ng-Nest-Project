import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import {User} from "../model/user.model";
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

    constructor(private http:HttpClient,
              private router:Router) {

    }
    
    async  login(username:string,password:string):Promise<boolean>{
      await localStorage.setItem('username',username);
      await localStorage.setItem('password',password);
      return true
    }
    
    public async getAuthHeaders() {
      const {username,password}= await this.getAuthFromLocalStorage();

      let authorizationData = 'Basic ' + btoa(username + ':' + password);
  
      return {
        Authorization: authorizationData
      }
    }
    

    private async getAuthFromLocalStorage() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      return {
        username,
        password
      };
    }

    public async isAuthenticated(): Promise<boolean> {
  
    const {username, password} = await this.getAuthFromLocalStorage();

    if(!username || !password) {
      return false;
    }
    return true;
  }
  
    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('username');
        localStorage.removeItem('password');

    }
    
}