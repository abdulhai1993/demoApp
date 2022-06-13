import { Pipe, PipeTransform } from '@angular/core';
import { Icon, IconType } from 'src/app/core/models/icon.model';
import { Config } from 'src/app/config/config';
import { FontAwesomeIcon } from 'src/app/config/font.awesome.icon';
import { LogService } from 'src/app/core/services/base/log.service';

@Pipe({
    name: 'filterIcons'
})
export class FilterIconPipe implements PipeTransform {

    constructor(
        private _logService: LogService,
    ) {

    }

    // uniCode, type
    transform(uniCode: string, type: string, args?: any): any {
        this._logService.logMessage("filterIcons pipe");

        let icon = new Icon();

        if (type == "custom-icon") {

            let data = Config.icons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {

                return data[0];
            }

            return icon;
        }
        else if (type == "fa-solid-icon") {

            let data = FontAwesomeIcon.solidIcons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {

                return data[0];
            }

            return icon;
        }
        else if (type == "fa-regular-icon") {

            let data = FontAwesomeIcon.regularIcons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {

                return data[0];
            }

            return icon;
        }
        else if (type == "fa-brand-icon") {

            let data = FontAwesomeIcon.brandIcons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {

                return data[0];
            }

            return icon;
        }
        else {
            return icon;
        }


    }

}

@Pipe({
    name: 'findIcon'
})
export class FindIconPipe implements PipeTransform {

    constructor(
        private _logService: LogService,
    ) {

    }

    // uniCode
    transform(uniCode: string, args?: any): any {
        this._logService.logMessage("findIcon pipe");
        this._logService.logMessage("uniCode");
        this._logService.logMessage(uniCode);

        // this._logService.logMessage("filterItem");
        // this._logService.logMessage("index");
        // this._logService.logMessage(index);
        let icon = new Icon();

        let data = Config.icons.filter(i => (i.uniCode == uniCode));

        if (data && data.length > 0) {
            this._logService.logMessage("check 1");
            return data[0];
        }
        else {
            let data = FontAwesomeIcon.solidIcons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {
                this._logService.logMessage("check 2");
                return data[0];
            }
            else {
                let data = FontAwesomeIcon.regularIcons.filter(i => (i.uniCode == uniCode));

                if (data && data.length > 0) {
                    this._logService.logMessage("check 3");
                    return data[0];
                }
                else {
                    let data = FontAwesomeIcon.brandIcons.filter(i => (i.uniCode == uniCode));

                    if (data && data.length > 0) {
                        this._logService.logMessage("check 4");
                        return data[0];
                    }
                    else {
                        this._logService.logMessage("check fail");
                        return icon;
                    }
                }
            }
        }


    }

}


@Pipe({
    name: 'findIconTypeViaIconUniCode'
})
export class FindIconTypeViaIconUniCodePipe implements PipeTransform {

    constructor(
        private _logService: LogService,
    ) {

    }

    // uniCode
    transform(uniCode: string, args?: any): any {
        this._logService.logMessage("findIconTypeViaIconUniCode pipe");
        this._logService.logMessage("uniCode");
        this._logService.logMessage(uniCode);

        // this._logService.logMessage("filterItem");
        // this._logService.logMessage("index");
        // this._logService.logMessage(index);
        let iconType = new IconType();

        let data = Config.icons.filter(i => (i.uniCode == uniCode));

        if (data && data.length > 0) {
            this._logService.logMessage("check 1");

            let typeData = Config.iconTypeList.filter(i => (i.prefix == data[0].prefix));

            if (typeData && typeData.length > 0) {
                this._logService.logMessage("check 1.1");
                return typeData[0];
            }
            return iconType;
        }
        else {
            let data = FontAwesomeIcon.solidIcons.filter(i => (i.uniCode == uniCode));

            if (data && data.length > 0) {
                this._logService.logMessage("check 2");
                let typeData = Config.iconTypeList.filter(i => (i.prefix == data[0].prefix));

                if (typeData && typeData.length > 0) {
                    this._logService.logMessage("check 1.1");
                    return typeData[0];
                }
                return iconType;
            }
            else {
                let data = FontAwesomeIcon.regularIcons.filter(i => (i.uniCode == uniCode));

                if (data && data.length > 0) {
                    this._logService.logMessage("check 3");
                    let typeData = Config.iconTypeList.filter(i => (i.prefix == data[0].prefix));

                    if (typeData && typeData.length > 0) {
                        this._logService.logMessage("check 1.1");
                        return typeData[0];
                    }
                    return iconType;
                }
                else {
                    let data = FontAwesomeIcon.brandIcons.filter(i => (i.uniCode == uniCode));

                    if (data && data.length > 0) {
                        this._logService.logMessage("check 4");
                        let typeData = Config.iconTypeList.filter(i => (i.prefix == data[0].prefix));

                        if (typeData && typeData.length > 0) {
                            this._logService.logMessage("check 1.1");
                            return typeData[0];
                        }
                        return iconType;
                    }
                    else {
                        this._logService.logMessage("check fail");
                        return iconType;
                    }
                }
            }
        }


    }

}