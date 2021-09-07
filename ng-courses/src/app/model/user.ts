import { IUser } from "./interfaces/iuser";

export class User implements IUser {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {

  }

}
