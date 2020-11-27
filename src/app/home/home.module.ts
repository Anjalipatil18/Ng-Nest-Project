import{NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Routes,RouterModule}  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {UserService} from '../home/users/users.service';
import {RolesService} from '../home/roles/roles.service';

import {HomeComponent} from './home.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { UserRoleRelComponent } from './user-role-rel/user-role-rel.component';
import { CreateRolesComponent } from './roles/create-roles/create-roles.component';
import { CreateUsersComponent } from '../home/users/create-users/create-users.component';
import { CreateUserRoleRelComponent } from './user-role-rel/create-user-role-rel/create-user-role-rel.component';
import { UpdateRolesComponent } from './roles/update-roles/update-roles.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { DeactiveUsersComponent } from './users/deactive-users/deactive-users.component';

const routes:Routes=[
    // {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
    {path:'home', component:HomeComponent},
    {path:'roles', component:RolesComponent},
    {path:'createRoles', component:CreateRolesComponent},
    {path:'updateRoles', component:UpdateRolesComponent},
    {path:'users', component:UsersComponent},
    {path:'ActiveUsers', component:ActiveUsersComponent},
    {path:'DeactiveUsers', component:DeactiveUsersComponent},
    {path:'createUsers', component:CreateUsersComponent},
    {path:'updateUser', component:UpdateUserComponent},
    {path:'userRoleRelation', component:UserRoleRelComponent},
    {path:'createUserRoleRelation', component:CreateUserRoleRelComponent}
]

@NgModule({
    declarations:[
        HomeComponent,
        RolesComponent,
        UsersComponent,
        UserRoleRelComponent,
        CreateRolesComponent,
        CreateUsersComponent,
        CreateUserRoleRelComponent,
        UpdateRolesComponent,
        UpdateUserComponent,
        ActiveUsersComponent,
        DeactiveUsersComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[
        UserService,
        RolesService
    ]
})

export class HomeModule{}