import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Observable, Subscription, SubscriptionLike as ISubscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../../core/models/user.model';

import { AuthService } from '../../../core/services/auth/auth.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';

import { ConfirmationDialogComponent } from '../../dialogs/confirmationDialog.component';
import { MappingService } from 'src/app/core/services/mapping/mapping.service';


declare var $;

@Component({
    selector: 'secure-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],

})
export class SecureHeaderComponent implements OnInit, OnDestroy {
    showNav: boolean;
    isLogin: any;
    countNotif: number;
    user: User = new User();

    isUser: User = new User();
    entityType: string;
    redirectUrl: string;
    profilePic = 'assets/img/user.png';

    navShow = false;
    logo: any;
    overAllUnreadStatus = false;

    initals: string = '';
    lastName: string = '';
    displayChar: string = '';

    // expandedIndex = -1;
    expandedIndex = 1;
    expandedIndexLevelOne = -1;

    dashboardPermission = false;
    // timeSheetPermission = false;
    // reportPermission = false;

    activeUserPermission = false;
    pendingUserPermission = false;
    rejectedUserPermission = false;
    blockUserPermission = false;
    supporterUserPermission = false;
    roleManagementPermission = false;
    userManagementPermission = false;

    questionsManagementPermission = false;

    faqManagementPermission = false;

    tradeEventManagementPermission = false;

    preferencePermission = false;

    powerBIPermission = false;

    mainPagePermission = false;
    appPagePermission = false;
    activityPermission = false;
    notificationAndEmailPermission = false;
    formReportPermission = false;
    contributionPermission = false;

    public notifications: Notification[] = [];
    public notificationUnseenCount: number = 0;

    public notificationLength: number = 0;


    constructor(
        private _authService: AuthService,
        private _logService: LogService,
        private _utilityService: UtilityService,
        private route: ActivatedRoute, private _router: Router,
        public dialog: MatDialog,
        public _mappingService: MappingService,
    ) {

    }

    ngOnInit(): void {


        this.user = this._authService.getUser();

        this._authService.loginUserStatusChanged.subscribe(
            (user) => {
                this._logService.logMessage('sidebar user: ');
                this._logService.logResponse(this.user);

                this.user = this._authService.getUser();


            }
        );





        this.isLogin = this._authService.isLoggedIn();

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

    openConfirmDialog(btn) {

        this._logService.logMessage("openConfirmDialog");
        this._logService.logMessage("btn");
        this._logService.logMessage(btn);

        let errMsg;
        let msg;
        let title;
        let type = "confirmation";
        if (btn === 'logout') {
            title = 'Confirmation';
            msg = 'Are you sure you want to Logout?';
        }
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '400px',
            data: { message: msg, errMessage: errMsg, title: title, type: type }
        });
        dialogRef.afterClosed().subscribe(result => {
            this._logService.logMessage("dialog close");
            this._logService.logMessage(result);
            if (result && result.status && btn === 'logout') {
                this.onlogOut();
            }

        });

        // this.save();
    }

    ngOnDestroy(): void {
        // this.updateInfo.unsubscribe();
    }





}
