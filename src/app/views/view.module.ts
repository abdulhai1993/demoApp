import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material/material.module";
import { SharedModule } from '../shared/shared.module';
import { UserManagementComponent } from './userManagement/userManagement.component';
import { AddUserDialogComponent } from './userManagement/addUserDialog/addUserDialog.component';
import { ActiveUserComponent } from './userManagement/activeUser/activeUser.component';
import { UserDetailDialogComponent } from './userManagement/dialog/userDetail.dialog.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    AddUserDialogComponent,
    ActiveUserComponent,
     UserDetailDialogComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    SharedModule,

  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents: [
    AddUserDialogComponent,
    UserDetailDialogComponent,

  ]
})
export class ViewModule { }
