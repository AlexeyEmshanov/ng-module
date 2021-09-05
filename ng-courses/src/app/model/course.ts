import { ICourse } from "./interfaces/icourse";

export class Course implements ICourse {

  constructor(
    public id: number,
    public title: string,
    public date: string,
    public duration: number,
    public description: string
  ) {

  }

}
