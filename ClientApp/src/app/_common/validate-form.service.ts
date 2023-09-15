import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { checkIsSameOrAfter, checkIsSameOrBefore } from '../LocalFunctionConstant';
import { AlertService } from 'src/app/_services/alert.service';

@Injectable({
    providedIn: 'root'
})

export class ValidateService<ValueForm> {

    constructor(private alertService: AlertService) { }

    required(textError: string) {
        return function (control: AbstractControl) {
            const value = control.value;
            return ((value !== 0 && !value) || (typeof value === 'string' && !value?.trim())) ? { textError } : null
        }
    }

    matches(reg: RegExp, textError: string, nameError?: string) {
        return (control: AbstractControl) => {
            const { value } = control;
            return (value && !reg.test(value)) ? { textError } : null
        }
    };

    maxLength(max: number, textError: string) {
        return (control: AbstractControl) => control?.value?.length > max ? { maxLength: textError } : null
    }

    minLength(min: number, textError: string) {
        return (control: AbstractControl) => (control?.value && control?.value?.trim() && control?.value?.length < min) ? { minLength: textError } : null
    }

    testValue<ValueItem>(nameValidate: string, textError: string, checkData: (values: ValueItem, rootForm: AbstractControl<ValueForm>) => boolean) {
        return (control: AbstractControl) => !checkData(control.value, control.root) ? { textError } : null
    }

    minDate(minDate: Date | number, textError: string) {
        return (control: AbstractControl) => checkIsSameOrBefore(control.value, minDate) ? null : { minDate: textError }
    }

    maxDate(maxDate: Date | number, textError: string) {
        return (control: AbstractControl) => checkIsSameOrAfter(control.value, maxDate) ? null : { maxDate: textError }
    }

    validateForm(value): ValidatorFn {
        return (f: AbstractControl) => {
            const errorForm = {};
            Object.keys(value)?.map(nameItem => {
                const control = f.get(nameItem);

                if (Array.isArray(value[nameItem])) {
                    let error = null
                    value[nameItem]?.some(e => {
                        error = e(control);
                        if (error) {
                            errorForm[nameItem] = error
                        }

                        return Boolean(error)
                    });
                    control.setErrors(error)
                } else {
                    const error = this.validateForm(value[nameItem])(control)
                    if (error) {
                        control.setErrors(error)
                        errorForm[nameItem] = error
                    }
                }
            });

            return Object.keys(errorForm).length > 0 ? errorForm : null
        }
    }

    checkValidForm(form: AbstractControl) {
        if (form?.invalid) {
            form?.markAllAsTouched();
            const nameItemError = Object.keys(form?.errors)[0];


            if (nameItemError) {
                // Nếu error là một Object khác một kiểu error thì đệ quy lấy textError đúng
                if (typeof form.errors[nameItemError] === 'object' && !form.errors[nameItemError].hasOwnProperty('textError')) {
                    return this.checkValidForm(form.get(nameItemError))
                }

                // Thông báo lỗi
                if (form.errors[nameItemError]?.textError) {
                    this.alertService.waring(form.errors[nameItemError]?.textError);
                }
                // get Input error
                const errorElement = document.getElementById(nameItemError)?.getElementsByTagName('input')?.item(0);

                if (errorElement?.scrollIntoView) {
                    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                if (errorElement?.focus) {
                    errorElement.focus({ preventScroll: true });
                }
            }
            // Nếu có validate thì return false hàm bên ngoài bắt được form vẫn còn validate
            return false
        }
        // Nếu không còn validate return true hàm bên ngoài bắt được form đã điều kiện để submit
        return true
    }
}
