import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'msg-dialog',
    templateUrl: './msgDialog.component.html'
})
export class MsgDialogComponent {

    confirm = true;
    msg: string = "";
    title: string = "";
    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<MsgDialogComponent>,
    ) {
        this.msg = data.message;
        this.title = data.title;
    }

    onYesClick(): void {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}