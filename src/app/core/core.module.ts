import { NgModule } from '@angular/core';
import { InterceptorService } from './services/base/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ErrorDialogService } from './services/base/errorDialog.service';
import { AuthService } from './services/auth/auth.service';
import { UIService } from "./services/ui/ui.service";
import { UtilityService } from './services/general/utility.service';
import { UserService } from './services/user/user.service';
import { LogService } from './services/base/log.service';
import { MappingService } from './services/mapping/mapping.service';
import { FormService } from './services/form/form.service';
import { AuthGuard } from './guards/auth.guard';
import { MainGuard } from './guards/main.guard';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
        AuthGuard, MainGuard,
        UserService, AuthService,
        UIService, UtilityService,
        LogService, MappingService,
        FormService, 
         ErrorDialogService,
    ],

    declarations: [],
    exports: []
})
export class CoreModule { }