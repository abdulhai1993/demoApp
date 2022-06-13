import { Component, Input, OnInit, Inject, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Message, MessageTypes } from 'src/app/core/models/message.model';
import { User } from 'src/app/core/models/user.model';


import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmationDialog.component';
import { observable, Observable, interval } from 'rxjs';
// import { interval } from 'rxjs/observable/interval';


@Component({
  selector: 'reset-password',
  // moduleId: module.id,
  templateUrl: 'resetPassword.component.html',
  styleUrls: ['./../auth.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  // @Input() key = '';
  // @Output() onSubmitStarted = new EventEmitter();
  // @Output() onSubmitFinished = new EventEmitter<any>();

  timerEnd: number = 60;
  myVar: any;

  email: string = "";

  phide = true;
  cphide = true;

  code: string = '';
  password: string = '';
  confirmPassword: string = '';

  form: FormGroup;

  user: User = new User();
  isTimeOn = false;
  isResendCode = false;
  isSubmitted = false;
  successMsg: string;
  // errMsg: string;

  baseHref: string = "";
  backgroundImageURL: string = "";

  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,20}$/

  // passwordMatcher = (control: AbstractControl): { [key: string]: boolean } => {
  //     const password = control.get('password');
  //     const confirmPassword = control.get('confirmPassword');
  //     if (!password || !confirmPassword) return null;
  //     return password.value === confirmPassword.value ? null : { nomatch: true };
  //     // if (password != confirmPassword) {
  //     //     console.log('false');
  //     //     control.get('confirmPassword').setErrors({ MatchPassword: true })
  //     // } else {
  //     //     console.log('true');
  //     //     return null
  //     // }
  // };

  MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (confirmPassword) {
      if (password != confirmPassword) {
        // console.log('false');
        AC.get('confirmPassword').setErrors({ matchPassword: true });
      } else {
        // console.log('true');
        AC.get('confirmPassword').setErrors(null)
        return null
      }
    }
  }

  constructor(
    private _authService: AuthService,
    public dialog: MatDialog,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private _uiService: UIService,
    private _logService: LogService,
    private fb: FormBuilder
  ) {
    this.email = this._authService.email;


    this.form = fb.group({
      'code': [this.code, Validators.compose([Validators.required])],
      // 'password': [this.password, Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern(this.passwordPattern)])],
      'password': [this.password, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      // 'confirmPassword': [this.user.confirmPassword, Validators.compose([Validators.required, this.passwordMatcher])],
      'confirmPassword': [this.confirmPassword, Validators.compose([Validators.required])],
    }
      , {
        validator: this.MatchPassword // your validation method
        // validator: this.passwordMatcher // your validation method
      }
    );
  }

  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.queryParams['k'] || null;

    // this.role = this.activatedRoute.snapshot.queryParams['role'];
    // if (this.role === 'brand' || this.role == 'influencer') {
    //     this.gotoUrl = '/login';
    // }
    // this.gotoUrl = '/login';

    this.baseHref = location.origin;
    this.backgroundImageURL = location.origin + location.pathname + "assets/img/auth-bg.jpg";
    // this.backgroundImageURL = location.origin + this.environment.baseHref + "assets/images/wmap-grca.png";
  }

  onPasswordFocusOut() {
    this.user.password = (this.user.password && this.user.password.length > 0 ? this.user.password.trim() : this.user.password);
  }

  onConfirmPasswordFocusOut() {
    this.user.confirmPassword = (this.user.confirmPassword && this.user.confirmPassword.length > 0 ? this.user.confirmPassword.trim() : this.user.confirmPassword);
  }

  async onClickReset() {
    this.isSubmitted = true;
    // this.code = this.activatedRoute.snapshot.queryParams['k'];
    const msg = new Message();

    if (this.form.invalid) {

      if (this.form.controls['code'].hasError('required')) {
        msg.msg = 'Code is required.';
      }
      else if (this.form.controls['password'].hasError('required')) {
        msg.msg = 'Password is required.';
      }
      // else if (this.form.controls['password'].hasError('minLength.requiredLength') < this.form.controls['password'].hasError('minLength.actualLength')) {
      else if (this.password.length < 6) {
        msg.msg = 'Password min length is 6 digit.';
      }
      // else if (this.form.controls['password'].hasError('maxLength')) {
      else if (this.password.length > 20) {
        msg.msg = 'Password max length is 20 digit.';
      }
      else if (this.form.controls['confirmPassword'].hasError('required')) {
        msg.msg = 'Confirm Password is required.';
      }
      else if (this.form.controls['confirmPassword'].hasError('matchPassword')) {
        msg.msg = 'Confirm Password does not match.';
      }
      this._uiService.showToast(msg, '');

    }
    else {
      this.isSubmitted = true;
      try {
        // let res: any = await this._authService.resetPassword(this.password, this.code, token);
        let res: any = await this._authService.resetPassword(this.password, this.code);
        this._logService.logMessage('reset pass api success: ');
        this._logService.logResponse(res);

        this.isSubmitted = false;

        msg.msg = res && res.message ? res.message : 'Reset password successfully';
        msg.msgType = MessageTypes.Information;
        // msg.autoCloseAfter = 400;
        this._uiService.showToast(msg, 'info');

        setTimeout(() => {
          this._router.navigate(['/auth']);
          // this._router.navigate(['/resetPass']);
        }, 3000);



      } catch (error) {
        this.isSubmitted = false;
        this._logService.logMessage('reset pass api err: ');
        this._logService.logError(error);
        this._authService.errStatusCheckResponseAuth(error);
      }

    }
  }

  async onClickResetWithToken(token) {
    const msg = new Message();
    msg.title = '';

    // this._logService.logMessage('this.form: ');
    // this._logService.logResponse(this.form);
    // this._logService.logResponse(this.form.controls['password']);
    // this._logService.logResponse(this.form.controls['password'].hasError('minLength'));
    // this._logService.logResponse(this.form.controls['password'].hasError('minLength.requiredLength'));

    if (this.form.invalid) {

      if (this.form.controls['code'].hasError('required')) {
        msg.msg = 'Code is required.';
      }
      else if (this.form.controls['password'].hasError('required')) {
        msg.msg = 'Password is required.';
      }
      // else if (this.form.controls['password'].hasError('minLength.requiredLength') < this.form.controls['password'].hasError('minLength.actualLength')) {
      else if (this.password.length < 6) {
        msg.msg = 'Password min length is 6 digit.';
      }
      // else if (this.form.controls['password'].hasError('maxLength')) {
      else if (this.password.length > 20) {
        msg.msg = 'Password max length is 20 digit.';
      }
      else if (this.form.controls['confirmPassword'].hasError('required')) {
        msg.msg = 'Confirm Password is required.';
      }
      else if (this.form.controls['confirmPassword'].hasError('matchPassword')) {
        msg.msg = 'Confirm Password does not match.';
      }
      this._uiService.showToast(msg, '');

    }
    else {
      this.isSubmitted = true;
      try {
        let res: any = await this._authService.resetPassword(this.password, this.code, token);
        this._logService.logMessage('reset pass api success: ');
        this._logService.logResponse(res);

        this.isSubmitted = false;

        msg.msg = res && res.message ? res.message : 'Reset password successfully';
        msg.msgType = MessageTypes.Information;
        // msg.autoCloseAfter = 400;
        this._uiService.showToast(msg, 'info');

        setTimeout(() => {
          this._router.navigate(['/auth']);
          // this._router.navigate(['/resetPass']);
        }, 3000);



      } catch (error) {
        this.isSubmitted = false;
        this._logService.logMessage('reset pass api err: ');
        this._logService.logError(error.error);
        this._authService.errStatusCheckResponseAuth(error);
      }

    }

  }


  async onClickResendCode() {
    const msg = new Message();
    msg.title = '';

    this._logService.logMessage("resendCode");

    if (this.email) {

      let title = 'Resend Code';
      let msg = 'Is this you email ' + this.email;
      let type = 'resendCode';

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        // data: { message: msg, title: title, type: this.perFormAction.code, form: form }
        data: { message: msg, title: title, type: type }
      });
      dialogRef.afterClosed().subscribe(result => {
        this._logService.logMessage('dialog close: ');
        this._logService.logMessage(result);

        if (result && result.status) {
          // this.blockUser(user, result.reason);
          this.resendCode();
        }
        else {
          this._authService.email = null;
          this._router.navigateByUrl('forgotPass');
        }
      });

    }
    else {
      this._router.navigateByUrl('forgotPass');
    }

  }

  async resendCode() {
    const msg = new Message();
    msg.title = '';

    this.isResendCode = true;
    try {
      let res: any = await this._authService.forgotPassword(this.email);
      this._logService.logMessage('resend code api success: ');
      this._logService.logResponse(res);

      this._authService.email = null;

      // this.isResendCode = false;
      // this.myVar = setInterval(this.myTimer, 1000);
      // interval(1000).subscribe(x => /* do something */)
      // this.myVar = interval(1000).subscribe(this.myTimer)
      this.myVar = interval(1000).subscribe(x => {

        this.myTimer();
      })

      msg.msg = res && res.message ? res.message : 'Email sent successfully';
      msg.msgType = MessageTypes.Information;
      // msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, 'info');


    } catch (error) {
      this.isResendCode = false;
      this._logService.logMessage('resend code api err: ');
      this._logService.logError(error.error);
      this._authService.errStatusCheckResponseAuth(error);
    }
  }

  myTimer() {
    // this._logService.logMessage('myTimer');
    // console.log("myTimer")
    this.timerEnd = this.timerEnd - 1;
    this.isResendCode = true;
    this.isTimeOn = true;

    // console.log("this.isResendCode", this.isResendCode)
    // console.log("this.isTimeOn", this.isTimeOn)
    // console.log("this.timerEnd", this.timerEnd)
    if (this.timerEnd == 0) {
      this.isResendCode = false
      this.isTimeOn = false
      this.timerEnd = 60;
      // clearInterval(this.myVar);
      if (this.myVar) {
        this.myVar.unsubscribe();
      }
    }
  }

  onClickLogin() {
    // this.role = this.activatedRoute.snapshot.queryParams['role'];
    // this.role == 'brand' || this.role == 'influencer' ? this._router.navigate(['/login']) : this._router.navigate(['/login']);
    // this._router.navigate(['/login']);
    this._router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    if (this.myVar) {
      this.myVar.unsubscribe();
    }
  }


}
