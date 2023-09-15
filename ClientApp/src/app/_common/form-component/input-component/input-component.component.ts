import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class InputComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public hint: string = '';
  @Input() public type: 'text' | 'number' | 'email' | 'password' = 'text';
  @Input() public placeholder: string = '';
  @Input() public control: any;
  @Input() public controlName: string = '';
  @Input() public appearance: 'legacy' | 'fill' | 'standard' | 'outline' = 'outline';
  @Input() public requiredText: string = this.controlName + ' không được để trống';
  @Input() public textArea: boolean = false;
  @Input() maxLength: number = null
  @Input() public required: boolean = false;
  @Input() public needCapitalize?: boolean = false
  formGroup!: FormGroup;

  constructor(
    private ctrlContainer: FormGroupDirective,
  ) { }

  @ContentChild(MatFormFieldControl, { static: true })
  public formFieldControl!: MatFormFieldControl<any>;

  public matFormField!: MatFormField;

  ngOnInit(): void {
    if (this.matFormField) this.matFormField._control = this.formFieldControl;
    this.formGroup = this.ctrlContainer.form;
    const control = new FormControl('');
    this.formGroup.addControl(this.controlName, control);
  }

  getErrorMessage(): string {
    let { errors } = this.control;

    if (typeof errors?.[Object.keys(errors)[0]] === 'boolean') {
      errors = null
    }
    return errors?.[Object.keys(errors)[0]]
  }
}
