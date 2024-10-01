import { Component, Input, OnInit, Output } from '@angular/core';
import { Customer } from "../models/customer";
import { NgForOf } from '@angular/common';
import { CustomerListItemComponent } from "../customer-list-item/customer-list-item.component";
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
    
  }
  
  // customerList: Customer[] = [
  //   {customerID: 1, firstName: "Seung", lastName: "Yu", address: "1st Avenue", phoneNumber: "226-111-1111", isBooking: true, nationality: "Korea"},
  //   {customerID: 2, firstName: "Lebron", lastName: "James", address: "2nd Avenue", phoneNumber: "226-222-2222", isBooking: false, nationality: "USA"},
  //   {customerID: 3, firstName: "Shohei", lastName: "Ohtani", address: "3re Avenue", phoneNumber: "226-333-3333", isBooking: false, nationality: "Japan"},
  //   {customerID: 4, firstName: "Heungmin", lastName: "Son", address: "4th Avenue", phoneNumber: "226-444-444", isBooking: true, nationality: "Korea"}
  // ];

  // onClick event for detail
  customerChoice?: Customer;
  goToCustomerDetail(customer: Customer): void {
    this.customerChoice = customer;
  }

  

  // createSubsList() {
  //   this.contentItem = this.customerList;
  // }
}

