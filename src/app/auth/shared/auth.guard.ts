// import { Injectable } from '@angular/core';
// import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     private url: string;

//   constructor(public auth: AuthService, public router: Router) {}
//   private handleAuthState(): boolean {

//     if (this.isLoggedIn()) {

//       this.router.navigate(['/login']);
//       return false;
//     }

//     return true;
//   }

//   private handleNotAuthState(): boolean {

//     if (this.isLoggedIn()) {

//       return true;
//     }

//     this.router.navigate(['/login']);
//       return false;
//   }

//   private isLoggedIn(): boolean {
//     if (this.url.includes('login') ) {
//       return true;
//     }

//     return false;
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     this.url = state.url;

//     if (this.auth.isAuthenticated()) {
//       return this.handleAuthState();
//     }

//     return this.handleNotAuthState();
//   }
   
// }