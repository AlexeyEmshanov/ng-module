import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DateFieldComponent, multi: true }
  ]
})
export class DateFieldComponent implements OnInit, ControlValueAccessor {
  dateValue: Date = new Date();

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: Date) {
    this.dateValue = value
    console.log('Write value', typeof this.dateValue, this.dateValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: any) {
    this.onChange(value);
    this.onTouch();
  }

  constructor() { }

  ngOnInit(): void {
    this.dateValue = new Date();
    console.log('On Init dateValue', this.dateValue)
  }
}
