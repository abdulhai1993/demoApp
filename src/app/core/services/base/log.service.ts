import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()
export class LogService {

    logMessage(msg) {
        if (environment.showLog)
            console.log(msg);
    }

    logError(err) {
        if (environment.showLog)
            console.error(err);
    }

    logWarn(warn) {
        if (environment.showLog)
            console.warn(warn);
    }

    logRequest(req) {
        if (environment.showLog) {
            console.log("Request Intercepted");

            console.log(req);
        }
    }

    logResponse(res) {
        if (environment.showLog) {
            console.log("Reponse Intercepted");
            console.log(res);
        }
    }

    logResponseError(resErr) {
        if (environment.showLog) {
            console.log("Reponse Intercepted with Error");
            console.log(resErr);
        }
    }

   
}