import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExpectedCourse]'
})
export class ExpectedCourseDirective implements OnInit {
  @Input() startCourseDate: Date = new Date();

  public currentDate = new Date();

  private testDay = new Date((new Date()).setDate(this.currentDate.getDate() - 14))

  constructor(public element: ElementRef) {  }

  ngOnInit() {
    console.log('directive 0')
    console.log(this.startCourseDate);
    this.isActualCourse(this.startCourseDate);
  }

  public isActualCourse(courseDate: Date): void | null {
    courseDate = new Date(courseDate);

    if (
      (courseDate < this.currentDate) &&
      (courseDate.setHours(0, 0, 0, 0) >= this.testDay.setHours(0, 0, 0, 0))
    ) {
        this.element.nativeElement.classList.add('fresh');
    } if (courseDate > this.currentDate) {
        this.element.nativeElement.classList.add('upcoming');
    }
  }
}
