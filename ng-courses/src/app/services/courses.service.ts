import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ICourse } from '../model/interfaces/icourse';
import { COURSES } from '../model/mock-data';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {
  public courses: ICourse[] = _.cloneDeep(COURSES);

  private counter = 1;

  constructor(private http: HttpClient) { }

  public getCoursesList(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(AppSettings.BASE_URL + `/courses?start=0&count=${this.counter * 5}`)
    // return this.courses;
  }

  public createCourse(newCourse: ICourse): ICourse[] {
    this.courses.push(newCourse);
    return this.courses;
  }

  public getCourseById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(AppSettings.BASE_URL + `/courses/${id}`)
  }

  public searchCourse(textFragment: string): Observable<ICourse[]> {
    textFragment = textFragment.trim();

    const requestOption = { params: new HttpParams().set('textFragment', textFragment)}

    return this.http.get<ICourse[]>(AppSettings.BASE_URL + `/courses`, requestOption);
  }

  public updateCourse(updatedCourseData: ICourse): ICourse[] {
    const indexToChange = this.courses.findIndex(course => course.id === updatedCourseData.id);

    const updatedCourse: ICourse = {
      id: updatedCourseData.id,
      name: updatedCourseData.name,
      description: updatedCourseData.description,
      date: updatedCourseData.date,
      length: updatedCourseData.length,
      isTopRated: updatedCourseData.isTopRated,
      authors: updatedCourseData.authors
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

  public counterUp(): void {
    this.counter ++;
  }

  public resetCounter(): void {
    this.counter = 1;
  }

}
