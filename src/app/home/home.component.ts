import { Component, OnInit } from '@angular/core';
import { User } from './interface/users';
import { UserService } from './users/users.service';

@Component({
  selector: 'auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
