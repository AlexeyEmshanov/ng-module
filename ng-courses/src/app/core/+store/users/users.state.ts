import { IUser } from "src/app/model/interfaces/iuser";
import { User } from "src/app/model/user";


export interface IUsersState {
  data: IUser
}

export const initialUsersState: IUsersState =
  {
    data: new User(0 , 'testtoken', { first: 'testFirstName', last: 'testLastName'}, 'testLogin', 'testPasswors'),
  }
