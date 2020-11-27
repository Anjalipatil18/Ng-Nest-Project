import { Component, OnInit } from '@angular/core';
import {UserRoleRelationService} from '../user-role-rel.service';
import {UserRoleRelation} from '../../interface/user-role-relation';

@Component({
  selector: 'auth-deactive-relation',
  templateUrl: './deactive-relation.component.html',
  styleUrls: ['./deactive-relation.component.scss']
})
export class DeactiveRelationComponent implements OnInit {

  constructor(private relationService: UserRoleRelationService) { }

  relations: UserRoleRelation[];

  ngOnInit() {
    this. getUsers();
  }
  getUsers(): void {
    this.relationService.getRelations()
      .subscribe(      
        res => this.relations = res,
        err => console.log(err)
      )
  }
}
