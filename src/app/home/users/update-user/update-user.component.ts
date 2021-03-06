import { Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';
import {Router,ActivatedRoute } from '@angular/router';
import {User} from '../../interface/users';

@Component({
  selector: 'auth-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  
  user: User={
    username: '',
    password: '',
    isDeleted: true,
  };

  edit: boolean = false;

  constructor( private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if (params.id) {
      this.userService.getUser(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  updateUser() {
    const params = this.activatedRoute.snapshot.params;
    this.userService.updateUser(params.id, this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users'])
        },
        err => console.log(err)
      )
  }
}
