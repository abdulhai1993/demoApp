import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message, MessageTypes } from 'src/app/core/models/message.model';
import { User } from 'src/app/core/models/user.model';


import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { Config } from 'src/app/config/config';


@Component({
    selector: 'forgot-password',
    // moduleId: module.id,
    templateUrl: 'forgotPassword.component.html',
    styleUrls: ['./../auth.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    // @Input() role = '';
    // @Output() onSubmitStarted = new EventEmitter();
    // @Output() onSubmitFinished = new EventEmitter<any>();

    // patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    patternEmail = Config.pattern.email.regex;
    user: User = new User();

    email: string = "";

    isEmailExist = true;
    isSubmitted = false;
    isSubmitStarted = false;
    emailSuccess = false;
    emailSuccessMsg = '';
    // private _name = '';
    // private _email = '';
    gotoUrl: string;

    form: FormGroup;

    baseHref: string = "";
    backgroundImageURL: string = "";

    constructor(
        private _authService: AuthService,
        private _uiService: UIService,
        private _logService: LogService,
        private _router: Router,
        private activatedRoute: ActivatedRoute, private fb: FormBuilder
    ) {
        this.form = fb.group({
            // 'email': [this.user.email, Validators.compose([Validators.required, Validators.email, Validators.pattern(this.patternEmail)])],
            'email': [this.user.email, Validators.compose([Validators.required, Validators.email])],
            // 'email': [this.email, Validators.compose([Validators.required, Validators.pattern(this.patternEmail)])],
        });
    }

    ngOnInit(): void {
        // this.role = this.activatedRoute.snapshot.queryParams['role'];
        // if (this.role === 'brand' || this.role == 'influencer') {
        //     this.gotoUrl = '/login';
        // }
        this.gotoUrl = '/login';

        this.baseHref = location.origin;
        this.backgroundImageURL = location.origin + location.pathname + "assets/img/auth-bg.jpg";
        // this.backgroundImageURL = location.origin + this.environment.baseHref + "assets/images/wmap-grca.png";
    }

    emailFocusOut() {
        var re = new RegExp(this.patternEmail);
        if (this.email) {
            if (re.test(this.email)) {
                // console.log("Valid");

                this.form.controls['email'].setErrors(null);
                this.form.get('email').setValidators([Validators.required]);
                this.form.get('email').updateValueAndValidity();
            } else {
                this.form.controls['email'].setErrors({ 'incorrect': true });
            }
        }
        else {
            this.form.controls['email'].setErrors(null);
            this.form.get('email').setValidators([Validators.required]);
            this.form.get('email').updateValueAndValidity();
        }


        // this._logService.logMessage("userForm");
        // this._logService.logMessage(this.userForm);

    }

    onEmailFocusOut() {

        // this.user.email = (this.user.email && this.user.email.length > 0 ? this.user.email.trim() : this.user.email);
        this.email = (this.email && this.email.length > 0 ? this.email.trim() : this.email);
        // if (this.user.email && this.user.email.length > 0 && this.form.controls['email'].valid) {
        //     this._authService.checkEmailAvailability(this.user.email, '')
        //         .subscribe(
        //             (res) => {
        //                 if (res.json().data) {
        //                     console.log('email does not exist');
        //                     this.isEmailExist = false;
        //                     this.form.controls.email.setErrors({ notAvailable: true });
        //                 } else {
        //                     console.log('email is exist');
        //                     this.isEmailExist = true;

        //                 }

        //             },
        //             (err) => {
        //                 // this.isEmailExist = false;
        //                 let msg;
        //                 msg = this._authService.errStatusCheckResponse(err);
        //                 // console.log("msg",msg);
        //                 // this._uiService.showToast(msg, '');
        //                 // this.formRegister.controls.email.setErrors({ notAvailable: true });
        //                 // this.formRegister.controls['email'].setErrors({ notAvailable: true });
        //                 if (err.status == 404) {

        //                 } else {
        //                     // msg = this._authServices.errStatusCheck(err);
        //                     // this._uiServices.showToast(msg);
        //                 }
        //                 // console.log(this.formRegister.controls['email'])
        //             }

        //         );
        // }
    }

    recoverPassword_bk() {
        const msg = new Message();
        msg.title = '';

        // this.isSubmitted = true;

        // this.role = this.activatedRoute.snapshot.queryParams['role'];
        // this.user.entityType = this.role;
        // console.log(this.user);


        // this._authService.forgotPassword(this.user).subscribe(
        //     (res) => {
        //         // console.log("res",res.json());
        //         this.isSubmitted = false;
        //         this.emailSuccess = true;
        //         msg.msg = res.json().message ? res.json().message : 'Successfully email sent';
        //         // msg.msg = 'Successfully email sent';
        //         msg.msgType = MessageTypes.Information;
        //         msg.autoCloseAfter = 400;
        //         // this._uiService.showToast(msg, 'info');
        //         this.emailSuccessMsg = msg.msg;

        //     },
        //     (err) => {
        //         // console.log(err);
        //         this.isSubmitted = false;
        //         this._authService.errStatusCheckResponse(err);
        //     }
        // );
    }

    async recoverPassword() {
        const msg = new Message();
        msg.title = '';

        this.emailFocusOut();

        if (this.form.invalid) {

            if (this.form.controls['email'].hasError('required')) {
                msg.msg = 'Email is required.';
            }
            else if (this.form.controls['email'].hasError('email')) {
                msg.msg = 'Invalid email address.';
            }
            else if (this.form.controls['email'].hasError('pattern') || this.form.controls['email'].hasError('incorrect')) {
                msg.msg = 'Invalid email address.';
            }
            this._uiService.showToast(msg, '');

        }
        else {
            this.isSubmitted = true;
            try {
                let res: any = await this._authService.forgotPassword(this.email);
                this._logService.logMessage('forget pass api success: ');
                this._logService.logResponse(res);

                this.isSubmitted = false;

                msg.msg = res && res.message ? res.message : 'Email sent successfully';
                msg.msgType = MessageTypes.Information;
                // msg.autoCloseAfter = 400;
                this._uiService.showToast(msg, 'info');

                this._authService.email = this.email;

                setTimeout(() => {
                    // this._router.navigate(['/auth']);
                    this._router.navigate(['/resetPass']);
                }, 3000);



            } catch (error) {
                this.isSubmitted = false;
                this._logService.logMessage('forget pass api err: ');
                this._logService.logError(error.error);
                this._authService.errStatusCheckResponseAuth(error);
            }

        }

    }

    onClickLogin() {
        // this.role = this.activatedRoute.snapshot.queryParams['role'];
        // this.role == 'brand' || this.role == 'influencer' ? this._router.navigate(['/login']) : this._router.navigate(['/login']);
        // this._router.navigate(['/login']);
        this._router.navigate(['/auth']);
    }

}
