import { Component, OnInit } from '@angular/core';
import{UserRoleRelationService} from '../user-role-rel/user-role-rel.service';
import{UserRoleRelation} from '../interface/user-role-relation';

@Component({
  selector: 'auth-user-role-rel',
  templateUrl: './user-role-rel.component.html',
  styleUrls: ['./user-role-rel.component.scss']
})
export class UserRoleRelComponent implements OnInit {

  relations: UserRoleRelation[];

  constructor( private Relations: UserRoleRelationService) { }

  ngOnInit() {
    this.getRelations();
  }


  getRelations(): void {
    this.Relations.getRelations()
      .subscribe(
      //   (res)=>{
      //   console.log(res)
      // }
        res => this.relations = res,
        err => console.log(err)
      )
  }


  deleteRelation(_id: string): void {
    this.Relations.deleteRelation(_id)
      .subscribe(
        res => {
          console.log(res);
          this.getRelations();
        },
        err => console.log(err)
      )
  }

}
