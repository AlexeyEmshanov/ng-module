import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../model/interfaces/icourse';

@Pipe({
  name: 'filterCourses',
  pure: false,
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: ICourse[], searchText: string): ICourse[] {
    if (searchText === '') {
      return courses
    } else {
      return courses.filter(
          course => course.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
    }
  }

}
