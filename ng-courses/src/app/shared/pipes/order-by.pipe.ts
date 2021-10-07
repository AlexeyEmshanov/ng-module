import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[]): ICourse[] {
    courses.sort((a, b) => a.courseDate.getTime() - b.courseDate.getTime());
    return courses;
  }

}
