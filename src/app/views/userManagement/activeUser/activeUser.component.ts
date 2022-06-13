import { Component, Inject, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { User } from 'src/app/core/models/user.model';
import { Message, MessageTypes } from 'src/app/core/models/message.model';

import { ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmationDialog.component';
import { AddUserDialogComponent } from '../addUserDialog/addUserDialog.component';
import { UserDetailDialogComponent } from 'src/app/views/userManagement/dialog/userDetail.dialog.component';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { LogService } from 'src/app/core/services/base/log.service';
import { MappingService } from 'src/app/core/services/mapping/mapping.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { UtilityService } from 'src/app/core/services/general/utility.service';


@Component({
  selector: 'active-user',
  templateUrl: './activeUser.component.html',
  styleUrls: ['./../../view.component.scss']
})

export class ActiveUserComponent implements OnInit {

  @Input() isTabActive: boolean = false;

  user: User = new User();

  userList: User[] = [];

  displayedColumns = ['userName', 'email', 'contact', 'action'];

  dataSource = new MatTableDataSource<User>(this.userList);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isSpinner = false;
  filter: string = "";
  searchKey: string = "";

  paCount = 0;
  pageEvent: PageEvent;
  pageIndex = 0;
  pageSize = 5; // by default
  length: number = 0;
  pageSizeOptions = [5, 10, 25, 50, 100];
  upperLimit = 0;


  constructor(
    private _authService: AuthService,
    public dialog: MatDialog,
    private _uiService: UIService,
    private _utilityService: UtilityService,
    private _formBuilder: FormBuilder,
    private _logService: LogService,
    private _mappingService: MappingService,
    private _userService: UserService
  ) { }

  ngOnInit() {

    this.user = this._authService.getUser();

    this.loadUserList();

  }




  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  pageChangeEvent(event?: PageEvent): PageEvent {

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.loadUserList();

    return event;
  }


  refreshList() {
    this.loadUserList();
  }

  private async loadUserList() {

    const msg = new Message();

      this.userList = [];
      this.length = 0;
      this.dataSource = new MatTableDataSource<User>(this.userList);

      this.isSpinner = true;


      try {
        let res: any = await this._userService.getUserListAll();
        this.isSpinner = false;

            let array = res.data || [];

            this._logService.logMessage('res User list: ');
            this._logService.logResponse(array);

            var uList = [];
            for (let i = 0; i < array.length; i++) {
              let u = this._mappingService.mapUser(array[i]);
              uList.push(u);
            }
            this.userList = uList;
            this.dataSource = new MatTableDataSource<User>(this.userList);
            this.dataSource.paginator = this.paginator;

            if (this.userList.length == 0) {
              msg.msg = 'No User Found';
              msg.msgType = MessageTypes.Information;
              msg.autoCloseAfter = 400;
              this._uiService.showToast(msg, 'info');
            }        

      } catch (error) {
        this.isSpinner = false;
        this._logService.logMessage('error: ');
        this._logService.logError(error);

        this._authService.errStatusCheckResponse(error);
      }

  }


  openItemDialog(user, index) {

    const dialogRef = this.dialog.open(UserDetailDialogComponent, {
      disableClose: true,
      width: '1000px',
      // data: { message: msg, title: title, type: this.perFormAction.code, form: form }
      data: {
        user: user
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this._logService.logMessage('dialog close: ');
      this._logService.logMessage(result);

      if (result && result.status) {
        this.refreshList();

      }
    });
  }

  openConfirmDialog(btn, index?: number, validStatus?: boolean, user?: User) {

    this._logService.logMessage("openConfirmDialog");
    this._logService.logMessage("btn");
    this._logService.logMessage(btn);

    let errMsg;
    let msg;
    let title;
    let type = "confirmation";
    if (btn === 'onSubmit') {
      title = 'Confirmation';
      msg = 'Are you sure you want to submit these detail?';
    }
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { message: msg, errMessage: errMsg, title: title, type: type }
    });
    dialogRef.afterClosed().subscribe(result => {
      this._logService.logMessage("dialog close");
      this._logService.logMessage(result);
    });

  }


  openAddUserDialog() {

    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      disableClose: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this._logService.logMessage('dialog close: ');
      this._logService.logMessage(result);

      if (result) {
        this.refreshList();
      }
    });
  }

  openEditUserDialog(user: User) {

    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      disableClose: true,
      data: {
        id: user.id,
        user: user
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this._logService.logMessage('dialog close: ');
      this._logService.logMessage(result);

      if (result) {
        this.refreshList();
      }
    });
  }


}
