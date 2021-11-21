import { Component, Input, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IAppState } from 'src/app/core/+store';
import { AuthService } from 'src/app/services/auth.service';
import * as UsersSelectors from './../../../core/+store/users/users.selectors'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public userName$: Observable<string | null> = of('');

  constructor(public authService: AuthService, private store: Store<IAppState>) { }

  ngOnInit() {
    this.userName$ = this.store.select(UsersSelectors.getCurrentUserNameSelector)
  }

}
