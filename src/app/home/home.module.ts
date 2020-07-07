import{NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import{Routes,RouterModule}  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {HomeComponent} from './home.component';

// import {AuthGuard} from '../auth/shared/auth.guard';

const routes:Routes=[
    {path:'home', component:HomeComponent}
]

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    providers:[]
})

export class HomeModule{}