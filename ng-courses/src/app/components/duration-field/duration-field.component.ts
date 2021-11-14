import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DurationFieldComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: DurationFieldComponent, multi: true }
  ]
})
export class DurationFieldComponent implements ControlValueAccessor, Validator {

  errorMessage = 'should be a number greater than 0';

  @Input() durationValue?: number

  @Input() childControl!: FormControl;

  constructor() { }

  // ngOnInit(): void {
  //   this.durationValue = 0;
  // }

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: number) {
    this.durationValue = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: number) {
    this.durationValue = value;
    this.onChange(value);
    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('validation', (typeof control.value) === 'number')

    return ((typeof control.value) === 'number' && control.value !== 0 ) ? null :  {
      validateDuration: {
        dataInvalid: this.errorMessage
      }
    }
  }

}
