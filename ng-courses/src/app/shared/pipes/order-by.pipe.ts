import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/model/interfaces/icourse';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: ICourse[]): ICourse[] {
    courses.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return courses;
  }

}
