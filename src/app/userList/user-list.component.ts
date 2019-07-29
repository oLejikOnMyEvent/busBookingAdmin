import { Component, OnInit } from '@angular/core';
import { AllUsersService } from '../service/all-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private AllUsersService: AllUsersService) { }

  userList;

  ngOnInit() {
    this.AllUsersService.getAllUsers()
      .subscribe(
        (res) => {
          this.userList = res;
          console.log(res, 'getAllUsers')
        },
        err => console.log(err)
      )

  }

}
