import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { LogService } from '../base/log.service';
import { environment } from 'src/environments/environment';
import { observable, Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { Token } from '../../models/token.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {

  loginStatusChanged = new Subject<boolean>();
  loginUserStatusChanged = new Subject<User>();

  constructor(
    private _authService: AuthService,
    private _http: HttpClient,
    _handler: HttpBackend,
    private _logService: LogService,
  ) {
  }

  _completeUrl(url) {
    return environment.baseApiUrl + url;
  }

  async getStatus() {
    let url = "user/info";
    return await this._http.get(url).toPromise();
  }

  /**
   * get user info w.r.t userId with Auth server
   * @param userId    user id
   * @returns {Promise}
   */
  async getUserDetailViaId(userId) {
    // let url = environment.baseApiUrl + "user/info";
    let url = "user/profile/" + (userId || null);
    return await this._http.get(url).toPromise();
  }

  async getUserListAll() {
    let url = "user/all";
    return await this._http.get(url).toPromise();
  }



  async updateUserStatus(performAction?: any, userId?: Number, reason?: string) {
    let url = "user/delete/" + (userId || 0);
    let body = {
    }
    return await this._http.put(url, body).toPromise();
  }


  /**
   * add user with Auth server
   * @param data    request data
   * @returns {Promise}
   */
  async addUpdateUser(userData: User) {
    let url = userData && userData.id ? "user/update" : "user/add";

    let formDataBody: FormData = new FormData();
    formDataBody.append('Id', (userData.id || 0).toString());
    formDataBody.append('Username', (userData.firstName + userData.lastName || ""));
    formDataBody.append('FirstName', (userData.firstName || ""));
    formDataBody.append('LastName', (userData.lastName || ""));
    formDataBody.append('Email', (userData.email || ""));
    formDataBody.append('Password', (userData.password || ""));
    formDataBody.append('Mobile', (userData.mobileNumber || 0).toString());
    formDataBody.append('PhoneNumber', (userData.phoneNumber || 0).toString());

    formDataBody.append('Active', (userData.isActive || true).toString());

      return await this._http.post(url, formDataBody).toPromise();

  }


}
