import { Pipe, PipeTransform } from '@angular/core';
import { LogService } from 'src/app/core/services/base/log.service';

@Pipe({
    name: 'getInitials'
})
export class GetInitialsPipe implements PipeTransform {

    constructor(
        private _logService: LogService,
    ) {

    }

    // uniCode, type
    transform(str: String, args?: any): String {
        this._logService.logMessage("getInitials pipe");

        var parts = str.split(' ')
        var initials = ''
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].length > 0 && parts[i] !== '') {
                initials += parts[i][0].toUpperCase();
            }
        }
        return initials;


    }

}