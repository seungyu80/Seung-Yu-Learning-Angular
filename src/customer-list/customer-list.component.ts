import { Component } from '@angular/core';
import {Customers} from "./models/customers";
import { CustomerListItemComponent } from "../customer-list-item/customer-list-item.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerListItemComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent {
  
  customerList: Customers[] = [
    {customerID: 1, firstName: "Seung", lastName: "Yu", address: "1st Avenue", phoneNumber: "226-111-1111", isBooking: true, nationality: "Korea"},
    {customerID: 2, firstName: "Lebron", lastName: "James", address: "2nd Avenue", phoneNumber: "226-222-2222", isBooking: false, nationality: "USA"},
    {customerID: 3, firstName: "Michael", lastName: "Jordan", address: "3rd Avenue", phoneNumber: "226-333-3333", isBooking: true, nationality: "USA"},
    {customerID: 4, firstName: "Shohei", lastName: "Ohtani", address: "4th Avenue", phoneNumber: "226-444-4444", isBooking: false, nationality: "Japan"},
    {customerID: 5, firstName: "Heungmin", lastName: "Son", address: "5th Avenue", phoneNumber: "226-555-5555", isBooking: true, nationality: "Korea"}
  ];
}

