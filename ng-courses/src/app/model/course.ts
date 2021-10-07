import { ICourse } from "./interfaces/icourse";

export class Course implements ICourse {

  constructor(
    public id: number,
    public title: string,
    public courseDate: Date,
    public duration: number,
    public description: string,
    public topRated: boolean,
  ) {  }

}
