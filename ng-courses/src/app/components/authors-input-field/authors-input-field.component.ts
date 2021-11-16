import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable, of} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { IAuthor } from 'src/app/model/interfaces/iauthor';
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

  @Input() authorsFromCourse?: IAuthor[]

  /* MATERIAL START */

  selectable = false;
  removable = true;
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  authorCtrl = new FormControl();
  filteredAuthors$?: Observable<IAuthor[]>;
  selectedAuthors: IAuthor[] = [];
  allAuthors: IAuthor[] = [];

  @ViewChild('authorInput') authorInput!: ElementRef<HTMLInputElement>;

  constructor( private coursesService: CoursesService ) { }

  ngOnInit(): void {
    this.coursesService.getAuthors().subscribe((authorsList) => {
      this.allAuthors = authorsList

      this.filteredAuthors$ = this.authorCtrl.valueChanges.pipe(
        startWith(null),
        map((author: string | null) => {
          return (author ? this._filter(author) : this.allAuthors.slice())
        }),
      );
    })
  }

  add(event: MatChipInputEvent): void { /* ??: adding from keyboard*/
    console.log('add function', {event}, event.value, event.chipInput)
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      // this.selectedAuthors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.authorCtrl.setValue(null);
  }

  remove(author: IAuthor): void {
    const index = this.selectedAuthors.indexOf(author);

    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
      this.onChangeValue(this.selectedAuthors);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedAuthors.push(event.option.value);
    this.authorInput.nativeElement.value = '';
    this.onChangeValue(this.selectedAuthors);
    this.authorCtrl.setValue(null);
  }

  private _filter(value: string | IAuthor): IAuthor[] {
    let filterValue: string;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = (value.firstName + ' ' + value.lastName).toLowerCase()
    }
    return this.allAuthors.filter(author => (author.firstName + author.lastName).toLowerCase().includes(filterValue));
  }

  /* MATERIAL END */

  errorMessage = 'FRUITS NEEDED'

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(value: IAuthor[]) {
    this.selectedAuthors = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onChangeValue(value: IAuthor[]) {
    this.selectedAuthors = value;
    this.onChange(value);
    this.onTouch();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('Control', control.value.length)
    return ( control.value.length !== 0 ) ? null :  {
      validateAuthors: {
        dataInvalid: this.errorMessage
      }
    }
  }
}
