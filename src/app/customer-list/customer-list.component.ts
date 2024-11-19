import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { NgForOf, NgIf, CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { CustomerListItemComponent } from '../customer-list-item/customer-list-item.component';
import { CustomerService } from '../services/customer.service';
import { RouterLink } from '@angular/router';
import { FullNamePipe } from '../pipes/full-name.pipe';
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ NgForOf, CustomerListItemComponent, RouterLink, NgIf, CurrencyPipe, UpperCasePipe, LowerCasePipe, FullNamePipe, HoverHighlightDirective],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  error: string | null = null;
  
  

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
      }, 
      error:err => {
        this.error = 'Error fetching customers';
        console.error("Error fetching Customers", err)
      }, 
      complete:() => console.log("customer data fetch complete!")
    })
  }

  // onClick event for detail
  selectedCustomer?: Customer;
  selectCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
