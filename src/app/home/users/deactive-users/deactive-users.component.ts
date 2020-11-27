import { Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';
import {User} from '../../interface/users';

@Component({
  selector: 'auth-deactive-users',
  templateUrl: './deactive-users.component.html',
  styleUrls: ['./deactive-users.component.scss']
})
export class DeactiveUsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(      
        res => this.users = res,
        err => console.log(err)
      )
  }

}
