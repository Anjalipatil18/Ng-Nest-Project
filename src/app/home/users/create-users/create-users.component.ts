import { Component, OnInit } from '@angular/core';
import {User} from '../../interface/users';
import {UserService} from '../users.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'auth-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})

export class CreateUsersComponent implements OnInit {
  user: FormGroup;

  constructor( private userService: UserService,
              private router: Router,
              private fb:FormBuilder) { 
      
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.user = this.fb.group({
      
      username: ['',Validators.required],
   
      password: ['', Validators.required]
    })
  }

  submitUser() {

    this.userService.createUser(this.user.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
  }

   // updateuser() {
  //   delete this.user.createdAt;
  //   this.userService.updateuser(this.user._id, this.user)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/user'])
  //       },
  //       err => console.log(err)
  //     )
  // }

}
  




