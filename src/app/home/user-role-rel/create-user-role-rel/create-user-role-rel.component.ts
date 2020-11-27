import { Component, OnInit } from '@angular/core';
import{UserRoleRelationService} from '../user-role-rel.service';
import{UserRoleRelation} from '../../interface/user-role-relation';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'auth-create-user-role-rel',
  templateUrl: './create-user-role-rel.component.html',
  styleUrls: ['./create-user-role-rel.component.scss']
})
export class CreateUserRoleRelComponent implements OnInit {

  relation: FormGroup;

  constructor(private Relations: UserRoleRelationService,
              private router: Router,
              private fb:FormBuilder
            ) { }

  ngOnInit() {
    this.initForm();
    this.submitRelations();
   
  }
  
  initForm() {
    this.relation = this.fb.group({
      
      userId: ['',Validators.required],
      roleId: ['', Validators.required],
    })
  }

  submitRelations() {
    this.Relations.createRelation(this.relation.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/userRoleRelation']);
        },
        err => console.log(err)
      )
  }

 
}
