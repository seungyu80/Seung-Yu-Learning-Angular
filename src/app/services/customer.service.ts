import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import { customerList } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = customerList;

  constructor() { 
    
  }

  // Retrieve all of customer list
  retrieveCustomers(): Observable<Customer[]> {
    return of(customerList);
  }

  /*
   * Add the following methods to your service, 
   * each of which must use the observable pattern when returning the values specified:
  */
  // A method that accepts a number and returns the IContent item in the array that contains the same id as the number parameter
  retrieveCustomerById(customerID: number): Observable<Customer | undefined> {
    const customer = this.customers.find(customer => customer.customerID === customerID)
    return of(customer);
  }
  // Add
  addCustomer(addedCustomer: Customer): Observable<Customer[]> {
    this.customers.push(addedCustomer);
    return of(this.customers);
  }
  // Update
  updateCustomer(updatedCustomer: Customer): Observable<Customer[]> {
    const index = this.customers.findIndex(customer => customer.customerID === updatedCustomer.customerID);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
    return of(this.customers);
  }
  // Delete
  deleteCustomer(customerID: number): Observable<Customer[]> {
    this.customers = this.customers.filter(customer => customer.customerID);
    return of (this.customers);
  }
}
