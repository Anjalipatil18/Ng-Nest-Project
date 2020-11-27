import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../interface/users';
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.http.get<User[]>(`${this.BASE_URL}/api/users`,{headers});
  }

  getUser(id: string): Observable<User>{
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.get<User>(`${this.BASE_URL}/api/users/${id}`,{headers});
  }

  createUser(user:User): Observable<User> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.post<User>(`${this.BASE_URL}/api/users/`,user, {headers});
  }

  
  updateUser(id: string, user: User): Observable<User> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.patch<User>(`${this.BASE_URL}/api/users/${id}`,user, {headers});
  }

  deleteUser(_id: string): Observable<User> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.delete<User>(`${this.BASE_URL}/api/users/${_id}`,{headers});
  }


  getHeaders(){
    let username='admin'
    let password='123'

    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }

}
