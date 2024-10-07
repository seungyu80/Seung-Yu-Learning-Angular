import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './models/customer';
import { NgForOf } from "@angular/common";
import { CustomerListItemComponent } from './customer-list-item/customer-list-item.component';
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CustomerListComponent, CustomerListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title :string = 'Massage Therapy CRM';
  massageCourse :string = 'Thai Massage';

  // customer: Customer | undefined;

  // constructor(private customerService: CustomerService) {
  //   // This is constructor is primarily used for dependency injection.
    
  // }

  // ngOnInit(): void {
  //     const id = 1;
  //     if(id) {
  //       this.customerService.retrieveCustomerById(Number(id)).subscribe(customer => {this.customer = customer})
  //     }
  // }

  // userList: User[] = [
  //   {userId: 1, firstName: "Seung", lastName: "Yu", phoneNumber: "2261111000", isBooking: true},
  //   {userId: 2, firstName: "Lebron ", lastName: "James", phoneNumber: "2261111001", isBooking: false},
  //   {userId: 3, firstName: "Stephen", lastName: "Curry", phoneNumber: "2261111002", isBooking: false},
  //   {userId: 4, firstName: "Kevin", lastName: "Durant", phoneNumber: "2261111003", isBooking: false},
  //   {userId: 5, firstName: "Shohei", lastName: "Ohtani", phoneNumber: "2261111004", isBooking: false},
  //   {userId: 6, firstName: "Mike", lastName: "Trout", phoneNumber: "2261111005", isBooking: false}
  // ];

  // // toggle
  // toggleBookingStatus(user: User): void {
  //   user.isBooking = !user.isBooking;
  // }
}
