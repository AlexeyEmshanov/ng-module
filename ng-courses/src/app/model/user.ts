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

export const TEST_USER: IUser = {
  id: 19,
  name: {
    first: 'FakeFirstName',
    last: 'FakeLastName'
  },
  login: 'admin',
  password: '12345',
  fakeToken: 'asdasdasd'
};
