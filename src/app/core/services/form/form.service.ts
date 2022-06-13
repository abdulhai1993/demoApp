import { Injectable, OnDestroy, Inject } from "@angular/core";

import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class FormService {
    constructor() { }

    public validateAllFormFields(formGroup: FormGroup) {         //{1}
        Object.keys(formGroup.controls).forEach(field => {  //{2}
            const control = formGroup.get(field);             //{3}
            if (control instanceof FormControl) {             //{4}
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        //{5}
                this.validateAllFormFields(control);            //{6}
            }
        });
    }

    public phoneNoFunction(event, data = null): any {
        // console.log("phoneNoFunction");

        // if (event.keyCode == 8 || event.keyCode == 9
        //     || event.keyCode == 27 || event.keyCode == 13
        //     || (event.keyCode == 65 && event.ctrlKey === true))
        //     return;
        // if ((event.keyCode < 48 || event.keyCode > 57))
        //     event.preventDefault();

        // var length = data ? data.length : 0;

        // if (length == 3)
        //     return data = data + '-';

        // return data;

    }

    public textFieldtoNumberRestrict(event): any {
        // console.log("phoneNoFunction");

        if (event.keyCode == 8 || event.keyCode == 9
            || event.keyCode == 27 || event.keyCode == 13
            || (event.keyCode == 65 && event.ctrlKey === true))
            return;
        // if ((event.keyCode < 48 || event.keyCode > 57))
        if ((event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 96) || (event.keyCode > 105))
            event.preventDefault();

        // var length = data ? data.length : 0;

        // if (length == 3)
        //     return data = data + '-';

        // return data;

    }
}
