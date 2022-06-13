import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, OnDestroy } from "@angular/core";
import { AuthService } from '../services/auth/auth.service';
import { LogService } from '../services/base/log.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _logService: LogService
    ) { }

    canActivate(): boolean {
        this._logService.logMessage("AuthGuard");

        // check variable true for bypass route guard
        let check = false;
        // // if (this._authService.checkLogin()) {
        // if (this._authService.checkLogin() || check) {
        //     // if (this._authService.isLoggedIn()) {

        if (this._authService.checkLogin()) {
            // if (this._authService.isLoggedIn()) {
            this._logService.logMessage("logged in");
            return true;
        }
        this._logService.logMessage("logged out");
        //Redirect the user before denying them access to this route
        this._router.navigate(['/auth']);
        return false;
    }
}
