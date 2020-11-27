import { Component, OnInit } from '@angular/core';
import { Role } from '../interface/roles';
import{RolesService} from './roles.service';

@Component({
  selector: 'auth-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
  role: Role[];

  constructor( private roleService: RolesService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(
        res => this.role = res,
        err => console.log(err)
      )
  }

  
  deleteRole(_id: string): void {
    this.roleService.deleteRole(_id)
      .subscribe(
        res => {
          console.log(res);
          this.getRoles();
        },
        err => console.log(err)
      )
  }

  

}
