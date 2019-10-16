import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewChild
} from "@angular/core";
import IStore from "../../interfaces/store.interface";
import IApiStoresResults from "../../interfaces/store.interface";
import { MatPaginator, MatSnackBar, MatSort } from "@angular/material";
import { LoaderService } from "../../core/services/loader.service";
import { AdminService } from "../services/admin.service";
import { merge, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "bb-admin-stores-table",
  templateUrl: "./admin-stores-table.component.html",
  styleUrls: ["./admin-stores-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminStoresTableComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    "edit",
    "storeId",
    "name",
    "email",
    "phone",
    "address",
    "city",
    "postalCode",
    "region",
    "assistant"
  ];

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  stores: IStore[] = [];
  storesCount: number;
  sliderColor = "primary";
  filterValue: string;

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
          return this.adminService.getStores();
        }),
        map(data => {
          setTimeout(() => {
            // this.loader.display(false);
          }, 500);
          this.storesCount = data.count;
          return data.results;
        }),
        catchError(() => {
          return observableOf([]);
        })
      )
      .subscribe((data: any) => (this.stores = data));
  }

  getStores() {
    this.adminService.getStores().subscribe((data: IApiStoresResults) => {
      this.stores = data.results;
      this.storesCount = data.count;
    });
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.paginator.pageIndex = 0;
    this.getStores();
  }

  changePage(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.getStores();
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
