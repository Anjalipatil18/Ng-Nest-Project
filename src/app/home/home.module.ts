import{NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Routes,RouterModule}  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {HomeComponent} from './home.component';

import {AuthGuard} from '../auth/shared/auth.guard';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { UserRoleRelComponent } from './user-role-rel/user-role-rel.component';

const routes:Routes=[
    // {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
    {path:'home', component:HomeComponent},
    {path:'roles', component:RolesComponent},
    {path:'users', component:UsersComponent},
    {path:'userRoleRelation', component:UserRoleRelComponent}
]

@NgModule({
    declarations:[
        HomeComponent,
        RolesComponent,
        UsersComponent,
        UserRoleRelComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers:[
        AuthGuard
    ]
})

export class HomeModule{}