import { Component, OnInit } from '@angular/core';
import{RolesService} from '../roles.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'auth-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent implements OnInit {
  role: FormGroup;

  constructor( private roleService: RolesService,
               private router: Router,
               private fb:FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this. submitRole();
  }
  initForm() {
    this.role = this.fb.group({
      
      name: ['',Validators.required],
      description: ['', Validators.required],
      displayName: ['',Validators.required],
    })
  }

  submitRole() {

    this.roleService.createRole(this.role.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/roles']);
        },
        err => console.log(err)
      )
  }
}
