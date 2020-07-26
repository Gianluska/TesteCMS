import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Users from 'src/app/users-json/users.json' ;

export interface PeriodicElement {
  name: string;
  Id: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = Users;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() dataSource: any;

  public displayedColumns: string[] = ['Id', 'name', 'email'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
