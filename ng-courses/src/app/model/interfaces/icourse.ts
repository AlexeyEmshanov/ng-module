import { IAuthor } from "./iauthor";

export interface ICourse {
  id: number,
  name: string,
  description: string,
  isTopRated: boolean,
  date: Date,
  authors: IAuthor[]
  length: number,
}
