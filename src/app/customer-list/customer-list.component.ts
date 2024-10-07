import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { NgForOf } from '@angular/common';
import { CustomerListItemComponent } from '../customer-list-item/customer-list-item.component';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [ NgForOf, CustomerListItemComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {
    //this constructor is primarily used for dependency injection now
  }

  ngOnInit(): void {
    // this.customerService.retrieveCustomers();
    // console.log("CustomerListComponent Initalized with customers: ", this.customerList);
    this.customerService.retrieveCustomers().subscribe({
      next: (data: Customer[]) => this.customerList = data,
      error:err => console.error("Error fetching Customers", err),
      complete:() => console.log("customer data fetch complete!")
    })
  }

  // onClick event for detail
  customerChoice?: Customer;
  goToCustomerDetail(customer: Customer): void {
    this.customerChoice = customer;
  }
}
