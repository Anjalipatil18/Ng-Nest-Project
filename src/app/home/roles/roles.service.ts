import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Role } from '../interface/roles';
import { Observable } from 'rxjs'

@Injectable()
export class RolesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]>{
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.get<Role[]>(`${this.BASE_URL}/api/roles`,{headers});
  }

  createRole(Role: Role): Observable<Role> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
        return this.http.post<Role>(`${this.BASE_URL}/api/roles`, Role,{headers});
      }

  deleteRole(id: string): Observable<Role> {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    return this.http.delete<Role>(`${this.BASE_URL}/api/roles/${id}`,{headers});
  }

  getHeaders(){
    let username='admin'
    let password='123'

    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }

//   getRole(id: string): Observable<Role>{
//     return this.http.get<Role>(`${this.BASE_URL}/roles/${id}`);
//   }

//  



//   updateRole(id: string, Role: Role): Observable<Role> {
//     return this.http.put<Role>(`${this.BASE_URL}/Role/update?id=${id}`, Role);
//   }

}