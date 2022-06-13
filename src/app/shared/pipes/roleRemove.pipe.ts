import { Pipe, PipeTransform } from '@angular/core';

import { Config } from 'src/app/config/config';

import { Role } from 'src/app/core/models/role.model';

import { LogService } from 'src/app/core/services/base/log.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';

@Pipe({
    name: 'roleRemove'
})
export class RoleRemovePipe implements PipeTransform {

    constructor(
        private _logService: LogService,
        private _utilityService: UtilityService,
    ) {

    }

    // uniCode, type
    transform(roles: Role[], rolesRemove?: any[], key: string = "roleName", args?: any): any {
        this._logService.logMessage("roleRemove pipe");
        this._logService.logMessage("roles");
        this._logService.logMessage(roles);
        this._logService.logMessage("rolesRemove");
        this._logService.logMessage(rolesRemove);

        let rolesData: Role[] = [];
        rolesData = roles ? this._utilityService.deepCopy(roles) : [];
        if (rolesRemove && rolesRemove.length > 0) {

            rolesRemove.forEach(element1 => {
                // if (element == element1[key.toString()]) {
                let index = rolesData.findIndex(x => x[key] == element1);
                this._logService.logMessage("index = " + index);

                if (index > -1) {
                    rolesData.splice(index, 1);
                    // rolesData = roles;
                }
            });

        }
        // else {
        //     return rolesData;
        // }
        return rolesData;


    }

}


