import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/core/services/base/log.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/core/services/general/utility.service';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmationDialog.component.html',
    styleUrls: ['./../../views/view.component.scss']
})


export class ConfirmationDialogComponent implements OnInit {

    confirm = true;
    msg: string;
    title: string;
    type: string;
    reason: string = "";

    form: FormGroup;
    isFormShow = false;
    result = {
        status: false,
        reason: this.reason,
        // form: this.form
    }

    constructor(
        private _logService: LogService,
        private _utilityService: UtilityService,
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        // console.log("data", data);
        this._logService.logMessage('in modal Data: ');
        this._logService.logMessage(data);
        this.msg = data.message;
        this.title = data.title;
        this.type = data.type || this.type;
        // this.form = data.form;

        if (this.type == "block" || this.type == "reject") {
            this.isFormShow = true;
            this.form = _formBuilder.group({
                'reason': ["", Validators.compose([Validators.required])],
            });
        }
        else {
            this.isFormShow = false;
            this.form = _formBuilder.group({
                // 'reason': ["", Validators.compose([Validators.required])],
            });
        }

    }

    ngOnInit(): void {

    }

    onYesClick(): void {
        if (this.form.valid) {
            this.result.status = true;
            this.result.reason = this.reason;
            this.dialogRef.close(this.result);
        }
        else {
            this._logService.logMessage('validation failed : ');
            this._logService.logMessage(this.form);
            this._utilityService.validateAllFormFields(this.form);
            return;
        }
    }

    onNoClick(): void {
        this.dialogRef.close(this.result);
    }
}
