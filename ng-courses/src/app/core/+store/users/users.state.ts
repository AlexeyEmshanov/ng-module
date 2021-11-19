import { IUser } from "src/app/model/interfaces/iuser";
import { User } from "src/app/model/user";


export interface IUsersState {
  currentUser: IUser
}

export const initialUsersState: IUsersState =
  {
    currentUser: new User(0 , 'testtoken', { first: 'testFirstName', last: 'testLastName'}, 'testLogin', 'testPasswors'),
  }
