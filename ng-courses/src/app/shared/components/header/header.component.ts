import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public userName$: Observable<string | null> = of('');

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.userName$ = this.authService.getUserInfo();
  }

}
