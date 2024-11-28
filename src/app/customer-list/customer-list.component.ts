import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../models/customer';
import { NgForOf, NgIf, CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { CustomerListItemComponent } from '../customer-list-item/customer-list-item.component';
import { CustomerService } from '../services/customer.service';
import { RouterLink } from '@angular/router';
import { FullNamePipe } from '../pipes/full-name.pipe';
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ NgForOf, CustomerListItemComponent, RouterLink, NgIf, CurrencyPipe, UpperCasePipe, LowerCasePipe, FullNamePipe, HoverHighlightDirective,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit {

  //Placeholder values for the table
  displayedColumns:string[]= ['customerID', 'fullName', 'phoneNumber', 'nationality','isAdmin', 'credit'];
  customerList: Customer[] = [];
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource(this.customerList);
  error: string | null = null;
  
  //Reference to the paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null =null;

  constructor(private customerService: CustomerService) {
    //this constructor is primarily used for dependency injection now
  }

  ngOnInit(): void {
    // this.customerService.retrieveCustomers();
    // console.log("CustomerListComponent Initalized with customers: ", this.customerList);
    this.customerService.retrieveCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customerList = data;
        this.error = null;
        this.dataSource.data = data; // Assign data to dataSource
        this.dataSource.paginator = this.paginator; //Link paginator to the data source
      }, 
      error:err => {
        this.error = 'Error fetching customers';
        console.error("Error fetching Customers", err)
      }, 
      complete:() => console.log("customer data fetch complete!")
    })
  }

  // onClick event for detail
  // selectedCustomer?: Customer;
  // selectCustomer(customer: Customer): void {
  //   this.selectedCustomer = customer;
  // }
}
