import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { MatPaginator, MatSnackBar, MatSort } from "@angular/material";
import { AdminService } from "../services/admin.service";
import { LoaderService } from "../../core/services/loader.service";
import { merge, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import IApiUsersResults from "../../interfaces/users.interface";
import IUser from "../../interfaces/users.interface";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "bb-admin-users-table",
  templateUrl: "./admin-users-table.component.html",
  styleUrls: ["./admin-users-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersTableComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    "photo",
    "name",
    "email",
    "store__id",
    "last_login",
    "logins_count",
    "role",
    "is_active",
    "admin"
  ];
  sliderColor = "primary";

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  users: IUser[] = [];
  usersCount: number;
  filterValue: string;
  isUserActive: boolean;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private loader: LoaderService
  ) {}

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          // this.loader.display(true);
          return this.adminService.getUsers();
        }),
        map(data => {
          setTimeout(() => {
            // this.loader.display(false);
          }, 500);

          this.usersCount = data.count;
          return data.results;
        }),
        catchError(() => {
          return observableOf([]);
        })
      )
      .subscribe((data: any) => (this.users = data));
  }

  getUsers() {
    this.adminService.getUsers().subscribe((data: IApiUsersResults) => {
      this.users = data.results;
      this.usersCount = data.count;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.paginator.pageIndex = 0;
    this.getUsers();
  }

  activateUser(id, event) {
    this.adminService
      .activationUser(id, event.checked)
      .subscribe(() => this.getUsers());
  }

  changePage(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.getUsers();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Close", {
      duration: 3000,
      panelClass: ["snackbar-color"],
      verticalPosition: "bottom"
    });
  }

  ngOnDestroy() {}
}
