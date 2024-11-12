import { Injectable } from '@angular/core';
import { Observable, of, catchError, throwError } from 'rxjs';
import { Customer } from '../models/customer';
import { customerList } from '../data/mock-content';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'api/customers';
  private customers: Customer[] = customerList;

  constructor(private http: HttpClient) { 
    
  }

  // Retrieve all of customer list
  retrieveCustomers(): Observable<Customer[]> {
    // return of(this.customers);
    return this.http.get<Customer[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  /*
   * Add the following methods to your service, 
   * each of which must use the observable pattern when returning the values specified:
  */
  // A method that accepts a number and returns the IContent item in the array that contains the same id as the number parameter
  retrieveCustomerById(customerID: number): Observable<Customer> {
    // return of(this.customers.find(customer => customer.customerID === customerID));
    return this.http.get<Customer>(`${this.apiUrl}/${customerID}`).pipe(catchError(this.handleError));
  }
  // Add
  addCustomer(customer: Customer): Observable<Customer> {
    // this.customers.push(customer);
    // return of(customer);
    customer.customerID = this.generateNewCustomerId();
    return this.http.post<Customer>(this.apiUrl, customer).pipe(catchError(this.handleError));
  }

  // Update
  updateCustomer(customer: Customer): Observable<Customer | undefined> {
    const url = `${this.apiUrl}/${customer.customerID}`;
    return this.http.put<Customer>(url, customer).pipe(catchError(this.handleError));
  }

  // Delete
  deleteCustomer(customerID: number): Observable<{}> {
    const url = `${this.apiUrl}/${customerID}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // New method to generate a new unique ID
  generateNewCustomerId(): number {
    return this.customers.length > 0 ? Math.max(...this.customers.map(customer => customer.customerID)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again'));
  }

}
