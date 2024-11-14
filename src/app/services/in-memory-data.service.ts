
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb():{customers: Customer[]} {
    const customers: Customer[] = [
      {customerID: 1, firstName: "Seung", lastName: "Yu", address: "1st Avenue", phoneNumber: "226-111-1111", isBooking: true, nationality: "Korea", courseFee: 100.00},
      {customerID: 2, firstName: "Lebron", lastName: "James", address: "2nd Avenue", phoneNumber: "226-222-2222", isBooking: false, nationality: "USA", courseFee: 100.00},
      {customerID: 3, firstName: "Shohei", lastName: "Ohtani", address: "3re Avenue", phoneNumber: "226-333-3333", isBooking: false, nationality: "Japan", courseFee: 100.00},
      {customerID: 4, firstName: "Heungmin", lastName: "Son", address: "4th Avenue", phoneNumber: "226-444-444", isBooking: true, nationality: "Korea", courseFee: 100.00}
    ];
    return {customers}
  }
}
