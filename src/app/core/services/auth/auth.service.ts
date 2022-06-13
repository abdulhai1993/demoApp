import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { observable, Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Token } from '../../models/token.model';
import { Message, MessageTypes } from '../../models/message.model';

import { environment } from 'src/environments/environment';

import { LogService } from '../base/log.service';
import { UIService } from '../ui/ui.service';
import { Role } from 'src/app/core/models/role.model';

@Injectable()
export class AuthService {

  private _http: HttpClient;
  // isLoggedIn: Subject<boolean> = new Subject<boolean>();
  // email = new Subject<string>();
  email: string = null;
  loginStatusChanged = new Subject<boolean>();
  loginUserStatusChanged = new Subject<User>();
  loginUserRoleStatusChanged = new Subject<Role[]>();

  constructor(
    _handler: HttpBackend,
    // private http: HttpClient,
    private _logService: LogService,
    private _uiService: UIService,
    private _router: Router,
  ) {
    this._http = new HttpClient(_handler);
  }

  _completeUrl(url) {
    return environment.baseApiUrl + url;
  }

  /**
   * Logins auth service
   * @param user
   * @param token
   * @returns
   */
  async login(user: User, token?: string) {
    const url = environment.baseApiUrl + 'user/login';


    const body = {
      email: user.email,
      password: user.password,
      // userName: user.email,
      // password: user.password,
      accessPoint: environment.accessPoint,
      // clientId: environment.client_id,
      // clientSecret: environment.client_secret,
      // responseToken: token
    };
    return await this._http.post(url, body).toPromise();
  }

  /**
   * LoginOTP auth service
   * @param user
   * @param otp
   * @param token
   * @returns
   */
  async loginOTP(user: User, otp: string, token?: string) {
    const url = environment.baseApiUrl + 'user/verify/password';


    const body = {
      email: user.email,
      password: otp || null,
      accessPoint: environment.accessPoint,
    };
    return await this._http.post(url, body).toPromise();
  }

  /**
   * Refreshs token
   * @returns
   */
  async refreshToken() {
    let url = environment.baseApiUrl + 'user/refresh/token';

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    let user = this.getUser();

    const body = {
      userId: user.id || 0,
      clientId: environment.client_id,
      clientSecret: environment.client_secret,
      accessPoint: environment.accessPoint,
      refreshToken: localStorage.getItem('refresh_token')
    };

    return await this._http.post(url, body, { headers }).toPromise();
  }

  async forgotPassword(email) {
    // let url = environment.baseApiUrl + 'user/password/forgot/w/' + (email || null);
    let url = environment.baseApiUrl + 'user/password/forgot/' + (email || null);
    return await this._http.get(url).toPromise();
  }

  async resetPassword(password, code, token?) {
    // let url = environment.baseApiUrl + 'user/password/verifyandchange';
    let url = environment.baseApiUrl + 'user/password/update';

    let body = {
      verificationKey: code || null,
      newPassword: password || null,
      // responseToken: token || null
      // currentPassword: "string",
    };

    return await this._http.put(url, body).toPromise();
  }

  async saveToken(response: Response) {
    // let data: any = response.json();
    let data: any = response;
    var d = new Date();
    // this.token_expires = Date.now() + ((data.expiresIn - 60) * 1000);
    // this.token_expires = (d.getTime() + (data.expiresIn * 1000));

    let token_expires = (d.getTime() + ((data.expiresIn - 60) * 1000));
    // let token_expires = (d.getTime() + ((data.expires_in - 3380) * 1000));

    // this.token_expires = (d.getTime() + ((60) * 1000));

    // console.log('expiry:' + data.expiresIn);
    this._logService.logMessage('expiry : ' + data.expires_in);
    localStorage.setItem('token_id', data.access_token);
    localStorage.setItem('token_expiry', token_expires.toString());
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('token_type', data.token_type);

    // this.loginStatusChanged.next(true);

    // setTimeout(function(){ this.logoutUser(); }, (data.expires_in * 1000));
    // console.log();

    // return data;
  }

  storeUser(user: User) {
    if (!user) { return; }

    localStorage.setItem('user', JSON.stringify(user));
    this.loginUserStatusChanged.next(user);
  }

  storeRolePermission(roles: Role[]) {
    if (!roles) { return; }

    localStorage.setItem('userRoles', JSON.stringify(roles));
    this.loginUserRoleStatusChanged.next(roles);
  }


  checkLogin(): boolean {
    if (localStorage.getItem('token_id')) {
      // this.isLoggedIn.next(true);
      // this.loginStatusChanged.next(true);
      return true;
    } else {
      // this.isLoggedIn.next(false);
      // this.loginStatusChanged.next(false);
      return false;
    }
  }

  getUser(): User {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return;
  }

  getTokenData(): Token {

    const token = new Token();

    token.tokenId = localStorage.getItem('token_id');
    token.tokenExpiry = localStorage.getItem('token_expiry');
    token.refreshToken = localStorage.getItem('refresh_token');
    token.tokenType = localStorage.getItem('token_type');

    return token;

  }

  getUserRolePermisison(): Role[] {
    if (localStorage.getItem('userRoles')) {
      return JSON.parse(localStorage.getItem('userRoles'));
    }
    return;
  }



  isLoggedIn(): boolean {
    const token = this.getTokenData();
    if (token && token.tokenExpiry) {
      if (token.tokenExpiry > Date.now().toString()) {
        return true;
      }
    }
    return false;
  }

  register() {

  }

  async logoutUser() {



    const url = environment.baseApiUrl + 'user/logout';

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    const body = {
      clientId: environment.client_id,
      clientSecret: environment.client_secret,
      accessPoint: environment.accessPoint,
      accessToken: localStorage.getItem('token_id'),
      refreshToken: localStorage.getItem('refresh_token')
    };

    await this._http.post(url, body, { headers }).toPromise();


    console.log('logout');
    localStorage.clear();
    this.loginStatusChanged.next(null);
    this.loginUserStatusChanged.next(null);
    this.loginUserRoleStatusChanged.next(null);
    this._router.navigate(['/']);

    // this.loginStatusChangedNew.next("Abc");
  }

  async logoutUser_() {



    console.log('logout');
    localStorage.clear();
    this.loginStatusChanged.next(null);
    this.loginUserStatusChanged.next(null);
    this.loginUserRoleStatusChanged.next(null);
    this._router.navigate(['/']);

    // this.loginStatusChangedNew.next("Abc");
  }

  errStatusCheckResponse(err: any): any {
    let errMsg: string;
    // console.log('err', err);

    const msg = new Message();
    // msg.title = '';
    msg.iconType = '';
    if (err.status == 400) {
      // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      // msg.msg = err && err.message ? err.message : 'Sorry, an error has occured';

      // (err && typeof err === "object")
      msg.msg = (err && typeof err === "string") ? (err || 'Sorry, an error has occured') : (err && err.message ? err.message : 'Sorry, an error has occured');

      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

    } else if (err.status == 401) {
      // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      // msg.msg = err && err.message ? err.message : 'Sorry, an error has occured';
      // msg.msgType = MessageTypes.Error;
      // msg.autoCloseAfter = 400;
      // this._uiService.showToast(msg, '');
      // return msg;

    } else if (err.status == 403) {
      msg.msg = 'Sorry, you dont have access';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

      // this._router.navigate(['/permission']);

    } else if (err.status == 404 && err.statusText == 'Not Found') {

      msg.msg = 'Sorry, an error has occured';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

      // this._router.navigate(['/error']);

    } else if (err.status == 404 && err.statusText !== 'Not Found') {

      // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      // msg.msg = err && err.message ? err.message : 'Sorry, an error has occured';

      // (err && typeof err === "object")
      msg.msg = (err && typeof err === "string") ? (err || 'Sorry, an error has occured') : (err && err.message ? err.message : 'Sorry, an error has occured');

      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

    } else {
      msg.msg = 'Sorry, an error has occured';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;
    }
  }

  errStatusCheckResponseAuth(err: any): any {
    let errMsg: string;
    // console.log('err', err);

    const msg = new Message();
    // msg.title = '';
    msg.iconType = '';
    if (err.status == 400) {
      // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      // msg.msg = err && err.error && err.error.message ? err.error.message : 'Sorry, an error has occured';

      // (err && typeof err === "object")
      msg.msg = (err && err.error &&  typeof err.error === "string") ? (err.error || 'Sorry, an error has occured') : (err && err.error && err.error.message ? err.error.message : 'Sorry, an error has occured');

      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

    } else if (err.status == 401) {
      // // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      // msg.msg = err && err.error && err.error.message ? err.error.message : 'Sorry, an error has occured';
      // msg.msgType = MessageTypes.Error;
      // msg.autoCloseAfter = 400;
      // this._uiService.showToast(msg, '');
      // return msg;

    } else if (err.status == 403) {
      msg.msg = 'Sorry, you dont have access';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

      // this._router.navigate(['/permission']);

    } else if (err.status == 404 && err.statusText == 'Not Found') {

      msg.msg = 'Sorry, an error has occured';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

      // this._router.navigate(['/error']);

    } else if (err.status == 404 && err.statusText !== 'Not Found') {

      // msg.msg = err.json() && err.json().message ? err.json().message : 'Sorry, an error has occured';
      msg.msg = err && err.error && err.error.message ? err.error.message : 'Sorry, an error has occured';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;

    } else {
      msg.msg = 'Sorry, an error has occured';
      msg.msgType = MessageTypes.Error;
      msg.autoCloseAfter = 400;
      this._uiService.showToast(msg, '');
      return msg;
    }
  }

}
