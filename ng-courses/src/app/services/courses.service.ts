import { Injectable } from '@angular/core';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

let courses: ICourse[] = COURSES;


@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {

  constructor() { }

  public getCoursesList(): ICourse[] {
    return courses;
  }

  public createCourse(newCourse: ICourse): ICourse[] {
    courses.push(newCourse);
    return courses;
  }

  public getCourseById(id: number): ICourse[] {
    courses = courses.filter(course => course.id === id);
    return courses;
  }

  public updateCourse(
    id: number,
    newTitle?: string,
    // newCreationDate?: Date,
    newDuration?: number,
    // newDescription?: string,
    // newTopRated?: boolean,
  ): void {

    console.log('update!');
    const indexToChange = courses.findIndex(course => course.id === id);

    newTitle ? courses[indexToChange].title = newTitle : courses[indexToChange].title;
    // newCreationDate ? courses[indexToChange].creationDate = newCreationDate : courses[indexToChange].creationDate;
    newDuration ? courses[indexToChange].duration = newDuration : courses[indexToChange].duration;
    // newDescription ? courses[indexToChange].description = newDescription : courses[indexToChange].description;
    // newTopRated ? courses[indexToChange].topRated = newTopRated : courses[indexToChange].topRated;

  }

  public removeCourse(id: number): ICourse[] {
    courses = courses.filter((course: ICourse) => course.id !== id);
    return courses;
  }

}
