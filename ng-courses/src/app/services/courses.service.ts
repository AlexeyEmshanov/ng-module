import { Injectable, Input } from '@angular/core';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

let courses: ICourse[] = COURSES;


@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {
  // public courses: ICourse[] = COURSES;

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
    updatedData: {
      newTitle: string,
      newDuration: number
    }
  ): void {

    console.log('update!');
    const indexToChange = courses.findIndex(course => course.id === id);

    const updatedCourse: ICourse = {
      id: id,
      title: updatedData.newTitle,
      creationDate: courses[indexToChange].creationDate,
      duration: updatedData.newDuration,
      description: courses[indexToChange].description,
      topRated: courses[indexToChange].topRated,
    }

    const newCoursesArray = [...courses];
    newCoursesArray[indexToChange] = updatedCourse;
    console.log('!!!', courses[indexToChange], updatedCourse);
    courses = newCoursesArray;
    console.log(courses);

  }

  public removeCourse(id: number): ICourse[] {
    courses = courses.filter((course: ICourse) => course.id !== id);
    return courses;
  }

}
