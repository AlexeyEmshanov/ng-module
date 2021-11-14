import { AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { delay } from 'lodash';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DateFieldComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: DateFieldComponent, multi: true }
  ]
})
export class DateFieldComponent implements  ControlValueAccessor, Validator {
  dateValue?: Date;

  @Input() childControl!: FormControl;

  // @Input() existingDate?: Date

  constructor() { }

  // ngOnInit(): void {
    // this.dateValue = new Date();
  //   setTimeout(() => {
  //     if (this.existingDate) {
  //       this.dateValue = this.existingDate
  //     } else {
  //       this.dateValue = new Date();
  //     }
  //   }, 0);
    // console.log('Date input', this.existingDate)
    // if (this.existingDate) {
    //   this.dateValue = this.existingDate
    // } else {
    //   this.dateValue = new Date();
    // }
  // }

  // ngAfterViewInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   if (this.existingDate) {
  //     setTimeout(() => {
  //       this.dateValue = this.existingDate

  //     }, 0);
  //   // } else {
  //     // this.dateValue = new Date();
  //   }
  // }

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: Date) {
    this.dateValue = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: Date) {
    this.onChange(value);
    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return (control.value) ? null :  {
      validateDate: {
        dataInvalid: 'Date format is wrong'
      }
    }
  }


}
