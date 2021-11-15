import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-authors-input-field',
  templateUrl: './authors-input-field.component.html',
  styleUrls: ['./authors-input-field.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: AuthorsInputFieldComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: AuthorsInputFieldComponent, multi: true }
  ]
})
export class AuthorsInputFieldComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() childControl!: FormControl;

  /* MATERIAL START */

  selectable = false;
  removable = true;
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  fruitCtrl = new FormControl();
  filteredFruits$?: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {

  }

  ngOnInit(): void {
    this.filteredFruits$ = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void { /* adding from keyboard*/
    const value = (event.value || '').trim();
    console.log('add function', event)
    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    console.log('remove function', fruit)
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.onChangeValue(this.fruits);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('selected function', event.option.value)
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    this.onChangeValue(this.fruits);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  /* MATERIAL END */

  errorMessage = 'FRUITS NEEDED'

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: string[]) {
    this.fruits = value
    console.log('1', this.fruits[0])
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: string[]) {
    this.fruits = value;
    this.onChange(value);
    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return ( this.fruits.length !== 0 ) ? null :  {
      validateAuthors: {
        dataInvalid: this.errorMessage
      }
    }
  }
}
