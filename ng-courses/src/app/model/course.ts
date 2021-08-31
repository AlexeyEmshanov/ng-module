import { ICourse } from "./interfaces/Icourse";

export class Course implements ICourse {
  public id;

  public title;

  public creationDate;

  public duration;

  public description;

  constructor(id: number, title: string, creationDate: string, duration: number, description: string) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
  }

}
