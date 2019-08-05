import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServService} from '../auth-serv.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private AuthServService: AuthServService,  private router: Router) { }

  ngOnInit() {
    this.AuthServService.logOut();
    this.router.navigate(['loginAdmin']);
  }

}
