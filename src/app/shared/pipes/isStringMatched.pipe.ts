import { Pipe, PipeTransform } from '@angular/core';

import { LogService } from 'src/app/core/services/base/log.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';

// import { Config } from 'src/app/config/config';

@Pipe({
    name: 'isStringMatched'
})
export class IsStringMatchedPipe implements PipeTransform {

    constructor(
        private _logService: LogService,
        private _utilityService: UtilityService,
    ) {

    }

    // uniCode, type
    // transform(roles: Role[], rolesRemove?: any[], key: string = "roleName", args?: any): boolean {
    transform(str: string, strArray?: string[], args?: any): boolean {
        this._logService.logMessage("isStringMatched ");
        this._logService.logMessage("str ");
        this._logService.logMessage(str);
        this._logService.logMessage("strArray ");
        this._logService.logMessage(strArray);

        let strArrayData: string[] = [];
        strArrayData = strArray ? this._utilityService.deepCopy(strArray) : [];
        if (str && strArrayData && strArrayData.length > 0) {

            let check = 0;
            strArrayData.forEach(element => {

                if (element == str) {
                    check++;
                }

            });

            this._logService.logMessage("check ");
            this._logService.logMessage(check);

            return check > 0 ? true : false;

        }
        else {
            if (!str && !(strArrayData && strArrayData.length > 0)) {
                return true;
            }
            else {
                return false;
            }

        }


    }

}


