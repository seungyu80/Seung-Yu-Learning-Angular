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
    return of(this.customers);
  }

  /*
   * Add the following methods to your service, 
   * each of which must use the observable pattern when returning the values specified:
  */
  // A method that accepts a number and returns the IContent item in the array that contains the same id as the number parameter
  retrieveCustomerById(customerID: number): Observable<Customer | undefined> {
    return of(this.customers.find(customer => customer.customerID === customerID));
  }
  // Add
  addCustomer(customer: Customer): Observable<Customer> {
    this.customers.push(customer);
    return of(customer);
  }

  // Update
  updateCustomer(updatedCustomer: Customer): Observable<Customer | undefined> {
    const index = this.customers.findIndex(customer => customer.customerID === updatedCustomer.customerID);
    if (index > -1) {
      this.customers[index] = updatedCustomer;
      return of(updatedCustomer);
    }
    return of(undefined);
  }

  // Delete
  deleteCustomer(customerID: number): void {
    this.customers = this.customers.filter(customer => customer.customerID !== customerID);
  }

  // New method to generate a new unique ID
  generateNewCustomerId(): number {
    return this.customers.length > 0 ? Math.max(...this.customers.map(customer => customer.customerID)) + 1 : 1;
  }

}
