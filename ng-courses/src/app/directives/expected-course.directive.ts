import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExpectedCourse]'
})
export class ExpectedCourseDirective implements OnInit {
  @Input() startCourseDate!: Date;

  public currentDate = new Date();

  public isExpectedCourse?: boolean;

  constructor(public element: ElementRef) {

  }

  ngOnInit() {
    this.isExpectedCourse = this.isFreshCourse(this.startCourseDate);
    if (this.isExpectedCourse) {
      this.element.nativeElement.style.border = '1px #a0d1a0 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #a0d1a0';
    } else {
      this.element.nativeElement.style.border = '1px #689FF6 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #689FF6';
    }
  }

  public isFreshCourse(courseDate: Date): boolean | undefined {
    if (
      (courseDate < this.currentDate) &&
      (courseDate.valueOf() >= this.currentDate.setDate(this.currentDate.getDate() - 14))
      ) {
      return true;
    } if (courseDate > this.currentDate) {
      return false;
    } else {
      return undefined;
    }
  }
}
