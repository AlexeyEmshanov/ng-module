import { IUser } from "./interfaces/Iuser";

export class User implements IUser {
  public id;

  public firstName;

  public lastName;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}
