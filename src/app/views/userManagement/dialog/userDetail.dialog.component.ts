import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { observable, Observable, BehaviorSubject, Subject } from 'rxjs';

import { User } from 'src/app/core/models/user.model';
import { Message, MessageTypes } from 'src/app/core/models/message.model';
import { LogService } from 'src/app/core/services/base/log.service';
import { MappingService } from 'src/app/core/services/mapping/mapping.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';
import { UIService } from 'src/app/core/services/ui/ui.service';

import { Config } from 'src/app/config/config';


@Component({
    templateUrl: 'userDetail.dialog.component.html',
    styleUrls: ['./../../view.component.scss'],
    providers: [
        DatePipe // this pipe is used to change date format
    ],
})

export class UserDetailDialogComponent implements OnInit {


    user: User = new User();
    userDetail: User = new User();
    isSubmitted = false;

    addPermission = false;
    buttonTooltip = "";

    result = {
        status: false,
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public _authService: AuthService,
        public _uiService: UIService,
        public _utilityService: UtilityService,
        public _logService: LogService,
        public _mappingService: MappingService,
        private datePipe: DatePipe,
        public dialogRef: MatDialogRef<UserDetailDialogComponent>,
        // private roleService: RoleService
        private _fb: FormBuilder,
    ) {

        this._logService.logMessage('in modal Data: ');
        this._logService.logMessage(data);

        this.userDetail = data.user ? this._utilityService.deepCopy(data.user) : new User();

    }



    ngOnInit() {

        this.user = this._authService.getUser();

        this.addPermission = true;

    }


    onYesClick(): void {
        this.dialogRef.close(this.result);
    }

    onNoClick(): void {
        this.dialogRef.close(this.result);
    }
}