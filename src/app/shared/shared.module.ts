import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

// import { NavComponent } from "./nav/nav.component";
import { SpinComponent } from "./spin/spin.component";
import { PageLoaderComponent } from "./pageLoader/pageLoader.component";
import { ToastComponent } from "./toast/toast.component";
import { MaterialModule } from "../material/material.module";


import { EqualValidator } from './directives/equal-validator.directive';
import { BlockCopyPasteDirective } from './directives/blockCopyPaste.directive';
import { Trim, OnlyTrim } from './directives/trim.directive';
import { RemoveUnmatchedRegex } from './directives/removeUnmatchedRegex.directive';

import { ErrorDialogComponent } from '../shared/dialogs/errorDialog.component';
import { MsgDialogComponent } from './dialogs/msgDialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmationDialog.component';



import { SecureHeaderComponent } from './secureHeaderFooter/header/header.component';
import { SecureFooterComponent } from './secureHeaderFooter/footer/footer.component';

import { ThousandSuffixesPipe } from 'src/app/shared/pipes/thausandSuff.pipe';
import { FileSizePipe } from 'src/app/shared/pipes/fileSizePipe.pipe';
import { FilterIconPipe, FindIconPipe, FindIconTypeViaIconUniCodePipe } from 'src/app/shared/pipes/icon.pipe';
import { GetInitialsPipe } from 'src/app/shared/pipes/getInitials.pipe';
import { RoleRemovePipe } from 'src/app/shared/pipes/roleRemove.pipe';
import { EncodeBase64Pipe, DecodeBase64Pipe } from 'src/app/shared/pipes/encodeDecodeBase64.pipe';
import { IsStringMatchedPipe } from './pipes/isStringMatched.pipe';

import { ColorPickerModule } from 'ngx-color-picker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        CommonModule, RouterModule,

    ],

    declarations: [
        EqualValidator,
        BlockCopyPasteDirective,
        Trim, OnlyTrim,
        RemoveUnmatchedRegex,
 
        SpinComponent,
        PageLoaderComponent,
        ToastComponent,

        ThousandSuffixesPipe, FileSizePipe,
        FilterIconPipe, FindIconPipe, FindIconTypeViaIconUniCodePipe,
        GetInitialsPipe, RoleRemovePipe,
        EncodeBase64Pipe, DecodeBase64Pipe,
        IsStringMatchedPipe,

        ErrorDialogComponent, MsgDialogComponent,
        ConfirmationDialogComponent,


        SecureHeaderComponent,SecureFooterComponent,


    ],

    exports: [
        CommonModule,
        ColorPickerModule,

        EqualValidator,
        BlockCopyPasteDirective,
        Trim, OnlyTrim,
        RemoveUnmatchedRegex,

        ThousandSuffixesPipe, FileSizePipe,
        FilterIconPipe, FindIconPipe, FindIconTypeViaIconUniCodePipe,
        GetInitialsPipe, RoleRemovePipe,
        EncodeBase64Pipe, DecodeBase64Pipe,
        IsStringMatchedPipe,

        SpinComponent,
        PageLoaderComponent,
        ToastComponent,


        SecureHeaderComponent,SecureFooterComponent,
    ],
    providers: [

    ],
    entryComponents: [
        ErrorDialogComponent, MsgDialogComponent,
        ConfirmationDialogComponent,

    ]
})
export class SharedModule {
    constructor() {
        library.add(fas, far, fab);
    }
}