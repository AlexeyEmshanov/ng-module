import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../model/interfaces/icourse';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[]): ICourse[] {
    courses.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    return courses;
  }

}
