import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/interfaces/iuser';
import { testUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

// const user = testUser;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: IUser = testUser;

  constructor(public authService: AuthService) {
    authService.login('admin', JSON.stringify(this.user));
   }

  ngOnInit() {
    this.user = testUser;
    console.log('ngOnInit:', this.user);
  }

  onLogout(loginName: string) {
    this.authService.logout(loginName);
  }


}
