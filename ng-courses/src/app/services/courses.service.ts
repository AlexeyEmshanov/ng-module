import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ICourse } from '../model/interfaces/icourse';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { IAuthor } from '../model/interfaces/iauthor';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class CoursesService {
  public counter = 1;

  constructor(private http: HttpClient) { }

  public getCoursesList(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(AppSettings.BASE_URL + `/courses?start=0&count=${this.counter * 5}`)
  }

  public createCourse(newCourse: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(AppSettings.BASE_URL + '/courses', newCourse);
  }

  public getCourseById(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(AppSettings.BASE_URL + `/courses/${id}`)
  }

  public searchCourse(textFragment: string): Observable<ICourse[]> {
    textFragment = textFragment.trim();

    const requestOption = { params: new HttpParams().set('textFragment', textFragment)}
    return this.http.get<ICourse[]>(AppSettings.BASE_URL + `/courses`, requestOption);
  }

  public updateCourse(updatedCourseData: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(AppSettings.BASE_URL + `/courses/${updatedCourseData.id}`, updatedCourseData);
  }

  public removeCourse(id: number): Observable<any> {
    return this.http.delete<void>(AppSettings.BASE_URL + `/courses/${id}`)
  }

  public counterUp(): void {
    this.counter ++;
  }

  public resetCounter(): void {
    this.counter = 1;
  }

  public getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(AppSettings.BASE_URL + '/authors')
  }

}
