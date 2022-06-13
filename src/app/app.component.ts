import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { LogService } from './core/services/base/log.service';
import { Router } from '@angular/router';
import { User } from './core/models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User = new User();

  constructor(private _router: Router,
    private _logService: LogService,
    private _authService: AuthService,
  ) {
  }
  _isLoggedIn: boolean = false;

  ngOnInit(): void {


    this.loginSubscription();
    this._authService.checkLogin();
    this._isLoggedIn = this._authService.checkLogin();


    this._authService.loginStatusChanged.subscribe(
      (IsLoggedIn) => {
        this._logService.logMessage('on init loginStatusChanged: ' + IsLoggedIn);

        this._isLoggedIn = IsLoggedIn;
        if (this._isLoggedIn) {
        }
      }
    );

  }

  async loginSubscription() {
    this._authService.loginStatusChanged.subscribe(async res => {
      this._isLoggedIn = res;
      this._logService.logMessage('loginSubscription loginStatusChanged: ' + res);
      this._logService.logMessage('_isLoggedIn: ' + this._isLoggedIn);

      if (this._isLoggedIn) {

        this.refresTokenWithExpire();

      }
    });
  }



  async refresTokenWithExpire() {
    this._logService.logMessage("refresTokenWithExpire");
    this._logService.logMessage(localStorage.getItem('token_expiry'));

    if (localStorage.getItem('token_expiry')) {

      var dateNow = new Date();
      var dateExpire = parseInt(localStorage.getItem('token_expiry'));
      var checkTime = (dateExpire - dateNow.getTime()) - 600000;
      this._logService.logMessage("checkTime");
      this._logService.logMessage(checkTime);

      if (this._isLoggedIn) {

        try {

          let res: any = await this._authService.refreshToken();

          await this._authService.saveToken(res);

          setTimeout(() => {
            this.refresTokenWithExpire();
          }, 600000);

        } catch (error) {


          await this._authService.logoutUser();

        }
      }

    }
  }

}
