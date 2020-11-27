import{NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Routes,RouterModule}  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {UserService} from '../home/users/users.service';
import {RolesService} from '../home/roles/roles.service';
import {UserRoleRelationService} from '../home/user-role-rel/user-role-rel.service';

import {HomeComponent} from './home.component';
// import {AuthGuard} from '../auth/shared/auth.guard';

import { RolesComponent } from './roles/roles.component';
import { UserRoleRelComponent } from './user-role-rel/user-role-rel.component';
import { CreateRolesComponent } from './roles/create-roles/create-roles.component';
import { ActiveRolesComponent } from './roles/active-roles/active-roles.component';
import { DeactiveRolesComponent } from './roles/deactive-roles/deactive-roles.component';
import { UpdateRoleComponent } from './roles/update-role/update-role.component';

import { UsersComponent } from './users/users.component';
import { CreateUsersComponent } from '../home/users/create-users/create-users.component';
import { CreateUserRoleRelComponent } from './user-role-rel/create-user-role-rel/create-user-role-rel.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { DeactiveUsersComponent } from './users/deactive-users/deactive-users.component';

import { NavvarComponent } from './navvar/navvar.component';

import { ActiveRelationComponent } from './user-role-rel/active-relation/active-relation.component';
import { DeactiveRelationComponent } from './user-role-rel/deactive-relation/deactive-relation.component';

const routes:Routes=[
    // {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
    {path:'home', component:HomeComponent},

    {path:'roles', component:RolesComponent},
    {path:'createRoles', component:CreateRolesComponent},
    {path:'ActiveRoles', component:ActiveRolesComponent},
    {path:'DeactiveRoles', component:DeactiveRolesComponent},
    {path:'updateRole/:id', component:UpdateRoleComponent},

    {path:'users', component:UsersComponent},
    {path:'createUsers', component:CreateUsersComponent},
    {path:'ActiveUsers', component:ActiveUsersComponent},
    {path:'DeactiveUsers', component:DeactiveUsersComponent},
    {path:'updateUser/:id', component:UpdateUserComponent},

    {path:'userRoleRelation', component:UserRoleRelComponent},
    {path:'createUserRoleRelation', component:CreateUserRoleRelComponent},
    {path:'ActiveRelation', component:ActiveRelationComponent},
    {path:'DeactiveRelation', component:DeactiveRelationComponent},

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
        UpdateRoleComponent,
        UpdateUserComponent,
        ActiveUsersComponent,
        DeactiveUsersComponent,
        NavvarComponent,
        ActiveRolesComponent,
        DeactiveRolesComponent,
        ActiveRelationComponent,
        DeactiveRelationComponent
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
        RolesService,
        UserRoleRelationService,
        // AuthGuard
    ]
})

export class HomeModule{}