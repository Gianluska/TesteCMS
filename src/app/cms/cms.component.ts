import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import Users from 'src/app/users-json/users.json';
import { DialogRegisterUserComponent } from '../dialog-register-user/dialog-register-user.component';

export interface PeriodicElement {
  name: string;
  Id: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = Users;

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent implements OnDestroy {
  private mobileQueryListener: () => void;

  public sidenavCloseStart = false;
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  public mobileQuery: MediaQueryList;

  constructor(
    public dialog: MatDialog,
    media: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1099px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRegisterUserComponent, {
      width: '500px',
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
