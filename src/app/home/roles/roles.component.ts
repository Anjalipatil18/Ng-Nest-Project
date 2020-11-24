import { Component, OnInit } from '@angular/core';
import { Role } from '../interface/roles';
import { Router, ActivatedRoute } from '@angular/router';
import{RolesService} from './roles.service';

@Component({
  selector: 'auth-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})

export class RolesComponent implements OnInit {
  // role: Role = {
  //   name: '',
  //   description: '',
  //   displayName:''
  // };
  // edit: boolean = false;

  // constructor( private roleService: RolesService,
  //              private router: Router,
  //              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // const params = this.activatedRoute.snapshot.params;
    // if (params.id) {
    //   this.roleService.getRole(params.id)
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //         this.role = res;
    //         this.edit = true;
    //       },
    //       err => console.log(err)
    //     )
    // }
  }

  // submitProduct() {
  //   this.roleService.createRole(this.role)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/']);
  //       },
  //       err => console.log(err)
  //     )
  // }

  // updateProduct() {
  //   delete this.role.createdAt;
  //   this.roleService.updateRole(this.role._id, this.role)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/roles'])
  //       },
  //       err => console.log(err)
  //     )
  // }
  // }

}
