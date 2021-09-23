import { Injectable, Input } from '@angular/core';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';

// let courses: ICourse[] = COURSES;


@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {
  public courses: ICourse[] = COURSES;

  constructor() { }

  public getCoursesList(): ICourse[] {
    return this.courses;
  }

  public createCourse(newCourse: ICourse): ICourse[] {
    this.courses.push(newCourse);
    return this.courses;
  }

  public getCourseById(id: number): ICourse[] {
    this.courses = this.courses.filter(course => course.id === id);
    return this.courses;
  }

  public updateCourse(
    id: number,
    updatedData: {
      newTitle: string,
      newDuration: number
    }
  ): void {
    const indexToChange = this.courses.findIndex(course => course.id === id);

    const updatedCourse: ICourse = {
      id: id,
      title: updatedData.newTitle,
      creationDate: this.courses[indexToChange].creationDate,
      duration: updatedData.newDuration,
      description: this.courses[indexToChange].description,
      topRated: this.courses[indexToChange].topRated,
    }

    const newCoursesArray = [...this.courses];
    newCoursesArray[indexToChange] = updatedCourse;
    // console.log('!!!', courses[indexToChange], updatedCourse);
    this.courses = newCoursesArray;
    // console.log(courses);

  }

  public removeCourse(id: number): ICourse[] {
    this.courses = this.courses.filter((course: ICourse) => course.id !== id);
    return this.courses;
  }

}
