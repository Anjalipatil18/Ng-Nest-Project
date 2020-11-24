import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map, catchError } from 'rxjs/operators';
import {User} from "../model/user.model";
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

    constructor(private http:HttpClient) {

    }

    // private saveToken(data: any): string {
    
    //     localStorage.setItem('data', data);
    
    //     return data;
    //   }
    // getAll() {
    //     return this.http.get<User>('http://localhost:3000/api/users');
    // }

    // public login(userData: any): Observable<any> {
    //     return this.http.post('http://localhost:3000/api/users', userData).pipe(map(
    //       (data: string) => this.saveToken(data)));
    //   }


    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    // }

    // login(username:string, password:string): Observable<User> {
    //     return this.http.post<User>('/api/users', {username,password});
    // }

}