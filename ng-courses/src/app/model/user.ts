import { IUser } from "./interfaces/iuser";

export class User implements IUser {

  constructor(
    public id: number,
    public fakeToken: string,
    public name: {
      first: string,
      last: string,
    },
    public login: string,
    public password: string,
  ) {  }

}

export const testUser: User = {
  id: 1,
  fakeToken: 'asdkghbasdkgbaskg',
  name: {
    first: 'Alexey',
    last: 'Emshanov'
  },
  login: 'admin',
  password: '12345'
}
