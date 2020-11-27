import { Component, OnInit } from '@angular/core';
import {RolesService} from '../roles.service';
import {Role} from '../../interface/roles';

@Component({
  selector: 'auth-deactive-roles',
  templateUrl: './deactive-roles.component.html',
  styleUrls: ['./deactive-roles.component.scss']
})
export class DeactiveRolesComponent implements OnInit {

  roles: Role[];

  constructor(private roleService: RolesService) { }

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
