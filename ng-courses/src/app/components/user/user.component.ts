import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements IUser {
  id = 1;

  firstName = 'Alex';

  lastName = 'Emshanov';

  constructor() { }

  ngOnInit(): void {
  }

}
