import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appExpectedCourse]'
})
export class ExpectedCourseDirective {
  @Input() startCourseDate!: Date;

  public currentDate = new Date();

  public isExpectedCourse?: boolean;

  constructor(public element: ElementRef) {

  }

  ngOnInit() {
    this.isExpectedCourse = this.compareDates(this.startCourseDate);
    if (this.isExpectedCourse) {
      this.element.nativeElement.style.border = '1px #a0d1a0 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #a0d1a0';
    } else {
      this.element.nativeElement.style.border = '1px #689FF6 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #689FF6';
    }
  }

  public compareDates(courseDate: Date): boolean {
    return (courseDate < this.currentDate) ? true : false;
  }

}
