import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';


@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {
  public courses: ICourse[] = _.cloneDeep(COURSES);

  constructor() { }

  public getCoursesList(): ICourse[] {
    return this.courses;
  }

  public createCourse(newCourse: ICourse): ICourse[] {
    this.courses.push(newCourse);
    return this.courses;
  }

  public getCourseById(id: number):  ICourse[] {
    // this.courses = this.courses.filter(course => course.id === id);
    return this.courses.filter(course => course.id === id);
  }

  public updateCourse(updatedCourseData: ICourse): ICourse[] {
    const indexToChange = this.courses.findIndex(course => course.id === updatedCourseData.id);

    const updatedCourse: ICourse = {
      id: updatedCourseData.id,
      title: updatedCourseData.title,
      description: updatedCourseData.description,
      courseDate: updatedCourseData.courseDate,
      duration: updatedCourseData.duration,
      topRated: updatedCourseData.topRated,
    }

    const newCoursesArray = [...this.courses];
    newCoursesArray[indexToChange] = updatedCourse;
    this.courses = newCoursesArray;
    return this.courses;
  }

  public removeCourse(id: number): ICourse[] {
    this.courses = this.courses.filter((course: ICourse) => course.id !== id);
    return this.courses;
  }

}
