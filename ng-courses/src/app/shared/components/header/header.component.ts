import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { testUser } from 'src/app/model/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthService) { }

  // ngOnInit() {
  //   this.authService.login('admin', JSON.stringify(testUser))
  // }

  // onLogout() {
  //   this.authService.logout();
  // }
}
