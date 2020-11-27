import { Component, OnInit } from '@angular/core';
import {UserService} from './users.service';
import {User} from '../interface/users';

@Component({
  selector: 'auth-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  

  constructor(private userService: UserService) { }
  
  users: User[];

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

  deleteUser(_id: string): void {
    this.userService.deleteUser(_id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.log(err)
      )
  }

}
