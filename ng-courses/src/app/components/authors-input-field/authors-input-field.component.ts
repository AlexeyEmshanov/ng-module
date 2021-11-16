import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable, of} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { IAuthorList } from 'src/app/model/interfaces/iAuthorList';
import { CoursesService } from 'src/app/services/courses.service';

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

  @Input() authorsFromCourse?: string[]

  /* MATERIAL START */

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  authorCtrl = new FormControl();
  filteredAuthors$?: Observable<string[]>;
  selectedAuthors: string[] = ['Alex'];
  allAuthors: string[] = [];

  additionCtrl = new FormControl(this.selectedAuthors)

  @ViewChild('authorInput') authorInput!: ElementRef<HTMLInputElement>;

  constructor(
    private coursesService: CoursesService,
  ) {

  }

  ngOnInit(): void {
    console.log('AUTHORS FROM COURSE: ', this.authorsFromCourse)
    console.log('AUTHORS INSIDE: ', this.selectedAuthors)

    this.coursesService.getAuthors().subscribe((authorsList) => {
      const modificatedArr: string[] = []

      authorsList.forEach((author) => modificatedArr.push(author.name))
      this.allAuthors = modificatedArr;
      console.log({modificatedArr}, this.allAuthors)

      this.filteredAuthors$ = this.authorCtrl.valueChanges.pipe(
        startWith(null),
        tap(() => console.log('ACTION START', this.allAuthors)),
        map((author: string | null) => {
          console.log('test 1', author);
          return (author ? this._filter(author) : this.allAuthors.slice())
        }),
      );
    })
  }

  public test() {
    console.log("test function")
  }

  add(event: MatChipInputEvent): void { /* adding from keyboard*/
    const value = (event.value || '').trim();
    console.log('add function', event)
    // Add our fruit
    if (value) {
      this.selectedAuthors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.authorCtrl.setValue(null);
  }

  remove(fruit: string): void {
    console.log('remove function', fruit)
    const index = this.selectedAuthors.indexOf(fruit);

    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
      this.onChangeValue(this.selectedAuthors);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('selected function', event.option.value)
    this.selectedAuthors.push(event.option.viewValue);
    this.authorInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
    this.onChangeValue(this.selectedAuthors);
    this.additionCtrl.setValue(this.selectedAuthors);
  }

  private _filter(value: string): string[] {
    console.log('inside FILTER: ', value);
    const filterValue = value.toLowerCase();

    return this.allAuthors.filter(author => author.toLowerCase().includes(filterValue));
  }

  /* MATERIAL END */

  errorMessage = 'FRUITS NEEDED'

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: string[]) {
    this.selectedAuthors = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: string[]) {
    this.selectedAuthors = value;
    this.onChange(value);
    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return ( this.selectedAuthors.length !== 0 ) ? null :  {
      validateAuthors: {
        dataInvalid: this.errorMessage
      }
    }
  }
}
