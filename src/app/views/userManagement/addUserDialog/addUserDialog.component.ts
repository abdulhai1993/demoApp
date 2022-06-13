import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/core/services/base/log.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/core/services/general/utility.service';

import { Config } from 'src/app/config/config';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Message, MessageTypes } from 'src/app/core/models/message.model';
import { FormService } from 'src/app/core/services/form/form.service';
import { MappingService } from 'src/app/core/services/mapping/mapping.service';
import { Role } from 'src/app/core/models/role.model';

@Component({
    selector: 'add-user-dialog',
    templateUrl: 'addUserDialog.component.html',
    styleUrls: ['./../../view.component.scss']
})


export class AddUserDialogComponent implements OnInit {
    // export class AddUserDialogComponent {

    tooltipSapId = Config.pattern.sapId.tooltip;
    patternSapId = Config.pattern.sapId.regex;

    patternEmail = Config.pattern.email.regex;
    pattern1 = Config.pattern.genericOne.regex;

    tooltipCNIC = Config.pattern.cnic.tooltip;
    patternCNIC = Config.pattern.cnic.regex;   // 42101-1234567-1

    tooltipMobile = Config.pattern.mobileNo.tooltip;
    patternMobile = Config.pattern.mobileNo.regex;    // 0347-1234567
    maxLengthMobile = Config.pattern.mobileNo.maxLength;

    tooltipPhone = Config.pattern.phoneNo.tooltip;
    patternPhone = Config.pattern.phoneNo.regex;   // 021-12345678
    maxLengthPhone = Config.pattern.phoneNo.maxLength;

    userForm: FormGroup;

    isSubmited = false;
    newUser: User = new User();
    // countries: Country[] = [];
    newUserId: number;

    deviceType = "W";
    roleList: Role[] = [];

    user: User;
    isSubmitted = false;
    addPermission = false;
    buttonTooltip = "";

    stringRegex = Config.pattern.genericStringAllowed.regex;

    constructor(
        // @Inject('IAuthService') private _authService: IAuthService,
        private _authService: AuthService,
        public dialogRef: MatDialogRef<AddUserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _uiService: UIService,
        private utilityService: UtilityService,
        private _logService: LogService,
        private _mappingService: MappingService,
        private _userService: UserService,
        private _formService: FormService,
        private fb: FormBuilder,
    ) {

        this._logService.logMessage("Modal Dialog Data");
        this._logService.logMessage(data);

        if (data.id) {
            this.newUserId = data.id;
            this.loadUserDetail();
        }


        this.userForm = fb.group({
            'firstName': [this.newUser.firstName, Validators.compose([Validators.required, Validators.pattern(this.stringRegex)])],
            'lastName': [this.newUser.lastName, Validators.compose([Validators.required, Validators.pattern(this.stringRegex)])],
            'email': [this.newUser.email, Validators.compose([Validators.required, Validators.pattern(this.patternEmail)])],

            'password': [this.newUser.address, Validators.compose([Validators.required])],

            'mobileNumber': [this.newUser.mobileNumber, Validators.compose([Validators.min(0)])],
            'phoneNumber': [this.newUser.phoneNumber, Validators.compose([Validators.min(0)])],
        });
    }

    ngOnInit() {

        this.user = this._authService.getUser();

        this.addPermission = true;


    }


    async loadUserDetail() {

        this.isSubmited = true;

        try {
            let res: any = await this._userService.getUserDetailViaId(this.newUserId);
            this.isSubmited = false;

            this.newUser = this._mappingService.mapUser(res.data);
            console.log('user',this.newUser);

        } catch (error) {
            this.isSubmited = false;
            this._logService.logMessage('error: ');
            this._logService.logError(error);

            this._authService.errStatusCheckResponse(error);

        }

    }


    async onSubmit() {
        const msg = new Message;
        if (this.addPermission) {

            if (this.userForm.valid) {
                this.isSubmitted = true;

                try {
                    let res: any = await this._userService.addUpdateUser(this.newUser);

                    this.isSubmitted = false;

                    msg.msg = res && res.message ? res.message : 'User data successfully saved.';
                    msg.msgType = MessageTypes.Information;
                    msg.autoCloseAfter = 400;
                    this._uiService.showToast(msg, 'info');
                    this.dialogRef.close(true);

                } catch (error) {
                    this.isSubmitted = false;
                    this.buttonTooltip = this.utilityService.getUserPermissionTooltipMsg(this.addPermission, this.isSubmitted, "Submit");
                    // this._uiService.hideSpinner();
                    this._logService.logMessage('error: ');
                    this._logService.logError(error);

                    this._authService.errStatusCheckResponse(error);

                }
            }
            else {
                this._formService.validateAllFormFields(this.userForm);
            }
        }
        else {
            let msg = this.utilityService.permissionMsg();
            this._uiService.showToast(msg, '');
        }
    }

    onNoClick(): void {
        this.dialogRef.close(false);
    }
}
