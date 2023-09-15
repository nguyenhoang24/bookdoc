import {Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, UntypedFormBuilder } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { DATE_FORMATS } from 'src/app/_common/date-formats';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'vi' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  ]
})
export class DateInputComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public hint: string = '';
  @Input() public type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() public control: any;
  @Input() public controlName: string = '';
  @Input() public appearance: 'legacy' | 'fill' | 'standard' | 'outline' = 'outline';
  @Input() public requiredText: string = this.controlName + ' không được để trống';
  @Input() public required: boolean = null;
  @Input() public maxDate: Date | number = null;
  @Input() public minDate: Date | number = null;
  @Input() public max: any;
  @Output() public onChange: EventEmitter<any> = new EventEmitter();

  formGroup!: FormGroup;
  constructor(private ctrlContainer: FormGroupDirective) { }

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  @ViewChild('materialFormField', { static: true })
  public matFormField!: MatFormField;

  ngOnInit(): void {
    if (this.matFormField) this.matFormField._control = this.formFieldControl;
    this.formGroup = this.ctrlContainer.form;
    const control = new FormControl('');
    this.formGroup.addControl(this.controlName, control);
  }
  change(event){
    this.onChange.emit(event);
  }

  getErrorMessage(): string {
    let { errors } = this.control;

    if (typeof errors?.[Object.keys(errors)[0]] === 'boolean') {
      errors = null
    }
    return errors?.[Object.keys(errors)[0]]
  }

}
