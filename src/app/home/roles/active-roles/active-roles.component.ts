import { Component, OnInit } from '@angular/core';
import {RolesService} from '../roles.service';
import {Role} from '../../interface/roles';

@Component({
  selector: 'auth-active-roles',
  templateUrl: './active-roles.component.html',
  styleUrls: ['./active-roles.component.scss']
})
export class ActiveRolesComponent implements OnInit {

  constructor(private roleService: RolesService) { }

  roles: Role[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.roleService.getRoles()
      .subscribe(      
        res => this.roles = res,
        err => console.log(err)
      )
  }
}
