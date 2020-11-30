import { Component, OnInit } from '@angular/core';
import {RolesService} from '../roles.service';
import {Router,ActivatedRoute } from '@angular/router';
import {Role} from '../../interface/roles';

@Component({
  selector: 'auth-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})

export class UpdateRoleComponent implements OnInit {
  role: Role={
    name: '',
    description: '',
    displayName: '',
  };

  edit: boolean = false;

  constructor(private roleService: RolesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if (params.id) {
      this.roleService.getRole(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.role = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  updateRole() {
    const params = this.activatedRoute.snapshot.params;
    this.roleService.updateRole(params.id, this.role)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/roles'])
        },
        err => console.log(err)
      )
  }

}
