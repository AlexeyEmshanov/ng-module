import { IAuthor } from "./interfaces/iauthor";
import { ICourse } from "./interfaces/icourse";

export class Course implements ICourse {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public isTopRated: boolean,
    public date: Date,
    public authors: IAuthor[],
    public length: number,
  ) {  }

}
