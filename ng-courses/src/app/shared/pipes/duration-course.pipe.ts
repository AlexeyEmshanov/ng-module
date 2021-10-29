import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationCourse'
})
export class DurationCoursePipe implements PipeTransform {

  transform(duration: number | undefined | null): string {
    if (duration === undefined) {
      return `invalid course duration format`;
    }

    if (duration === null) {
      return '';
    }

    const hours = Math.trunc(duration / 60);
    const minutes = (duration % 60).toLocaleString('en-US', {minimumIntegerDigits: 2});


    return (hours === 0) ? `${minutes}min` : `${hours}h ${minutes}min`
  }
}
