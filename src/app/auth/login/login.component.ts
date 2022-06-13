import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from 'src/app/core/models/user.model';
import { Message, MessageTypes } from 'src/app/core/models/message.model';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { Config } from 'src/app/config/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../auth.component.scss']
})

export class LoginComponent implements OnDestroy {


  formLogin: FormGroup;
  formOTP: FormGroup;
  phide = true;
  email = '';
  pass = '';
  patternEmail = Config.pattern.email.regex;
  recaptchaToken: string;
  subscriptions: Subscription[] = [];
  user: User = new User();
  isOneTimePassword: boolean = false;
  otp: string = null;

  isSubmitted = false;
  @ViewChild('reset') reset: ElementRef;

  constructor(
    private _authService: AuthService,
    private _logService: LogService,
    private _uiServices: UIService,
    private _router: Router) {

    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    );


  }

  emailFocusOut() {
    let re = new RegExp(this.patternEmail);
    if (this.user.email) {
      if (re.test(this.user.email)) {

        this.formLogin.controls.email.setErrors(null);
        this.formLogin.get('email').setValidators([Validators.required]);
        this.formLogin.get('email').updateValueAndValidity();
      } else {
        this.formLogin.controls.email.setErrors({ incorrect: true });
      }
    } else {
      this.formLogin.controls.email.setErrors(null);
      this.formLogin.get('email').setValidators([Validators.required]);
      this.formLogin.get('email').updateValueAndValidity();
    }


  }



  async login() {
    this._logService.logMessage('login');
    const msg = new Message();
    if (this.formLogin.invalid) {

      if (this.formLogin.controls.email.hasError('required') && this.formLogin.controls.password.hasError('required')) {
        msg.msg = 'Email and password are required.';
      } else if (this.formLogin.controls.email.hasError('required')) {
        msg.msg = 'Email is required.';
      } else if (this.formLogin.controls.email.hasError('email')) {
        msg.msg = 'Invalid email address.';
      } else if (this.formLogin.controls.email.hasError('pattern') || this.formLogin.controls.email.hasError('incorrect')) {
        msg.msg = 'Invalid email address.';
      } else if (this.formLogin.controls.password.hasError('required')) {
        msg.msg = 'Password is required.';
      }
      this._uiServices.showToast(msg, '');

    } else {
      this.isSubmitted = true;
      try {
        const res: any = await this._authService.login(this.user);
        this._logService.logMessage('get connect token api success: ');
        this._logService.logResponse(res);
        let tokenData = res.data.token || null;
        this._logService.logResponse(tokenData);
        await this._authService.saveToken(tokenData);
        this._router.navigate(['/user/management/list']);

        this.isSubmitted = false;
        this.isOneTimePassword = true;



      } catch (error) {
        this.isSubmitted = false;
        this._logService.logMessage('connect token api err: ');
        this._logService.logError(error);

        this._authService.errStatusCheckResponseAuth(error);
      }

    }

  }

  
  nevigate(type) {
    if (type === 'forget-pass') {
      this._router.navigateByUrl('forgotPass');
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
