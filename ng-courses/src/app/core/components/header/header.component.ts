import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(public authService: AuthService) {

  }

  // ngOnInit() {
  //   this.user = testUser;
  //   console.log('ngOnInit:', this.user);
  // }

  onLogout(loginName: string) {
    this.authService.logout(loginName);
  }


}
