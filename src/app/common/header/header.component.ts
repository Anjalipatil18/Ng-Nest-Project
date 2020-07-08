import { Component } from '@angular/core';
import {AuthService} from  '../../auth/shared/auth.service';
import {Router} from "@angular/router";

@Component({
    selector:'auth-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})

export class HeaderComponent{
    constructor(private auth:AuthService,
                private router:Router){}

    logout(){
        this.auth.logout();

        this.router.navigate(['/login']);
    }
    
}