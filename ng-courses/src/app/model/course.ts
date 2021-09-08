import { ICourse } from "./interfaces/icourse";

export class Course implements ICourse {

  constructor(
    public id: number,
    public title: string,
    public creationDate: Date,
    public duration: number,
    public description: string
  ) {

  }

}