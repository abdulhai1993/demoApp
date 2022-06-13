import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/user.model';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { MappingService } from 'src/app/core/services/mapping/mapping.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';
import { Config } from 'src/app/config/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./../auth.component.scss']
})

export class LogoutComponent implements OnDestroy {


  subscriptions: Subscription[] = [];
  user: User = new User();

  isUser: User = new User();
  entityType: string;
  redirectUrl: string;

  isSubmitted = false;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _mappingService: MappingService,
    private _logService: LogService,
    private _uiServices: UIService,
    private _utilityService: UtilityService,
    private _router: Router
  ) {
    this.onlogOut();
  }

  onlogOut() {

    this.redirectUrl = 'auth';
    this._authService.logoutUser_();

    this.isUser = this._authService.getUser();
    if (this.isUser) {
      return;
    } else {
      this._router.navigate([this.redirectUrl]);
    }
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
