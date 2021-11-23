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

  constructor() { }

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
