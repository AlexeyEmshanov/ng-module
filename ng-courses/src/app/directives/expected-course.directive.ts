import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExpectedCourse]'
})
export class ExpectedCourseDirective implements OnInit {
  @Input() startCourseDate: Date = new Date();

  public currentDate = new Date();

  public isExpectedCourse?: boolean;

  constructor(public element: ElementRef) {

  }

  ngOnInit() {
    console.log('333')
    this.isExpectedCourse = this.isActualCourse(this.startCourseDate);
    if (this.isExpectedCourse) {
      console.log('444')
      this.element.nativeElement.style.border = '1px #a0d1a0 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #a0d1a0';
    } else {
      console.log('555')
      this.element.nativeElement.style.border = '1px #689FF6 solid';
      this.element.nativeElement.style.boxShadow = '0px 0px 4px 0px #689FF6';
    }
  }

  public isActualCourse(courseDate: Date): boolean | undefined {
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
