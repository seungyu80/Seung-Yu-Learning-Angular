
// import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class InMemoryDataService implements InMemoryDbService {
  createDb():{customers: Customer[]} {
    const customers: Customer[] = [
      {
        customerID: 1, 
        firstName: "Seung", 
        lastName: "Yu", 
        address: "1st Avenue", 
        phoneNumber: "226-111-1111", 
        isBooking: true, 
        nationality: "Korea", 
        credit: 500.00,
        courseList: ["Basic Massage", "Regular Massage", "Luxury Massage"],
        courseFees: [100, 110, 120]
      },
      {
        customerID: 2, 
        firstName: "Lebron", 
        lastName: "James", 
        address: "2nd Avenue", 
        phoneNumber: "226-222-2222", 
        isBooking: false, 
        nationality: "USA", 
        credit: 200.00,
        courseList: ["Regular Massage", "Luxury Massage"],
        courseFees: [110, 120]
      },
      {
        customerID: 3, 
        firstName: "Shohei", 
        lastName: "Ohtani", 
        address: "3re Avenue", 
        phoneNumber: "226-333-3333", 
        isBooking: false, 
        nationality: "Japan", 
        credit: 800.00,
        courseList: ["Basic Massage", "Regular Massage", "Luxury Massage"],
        courseFees: [100, 110, 120]
      
      },
      {
        customerID: 4, 
        firstName: "Heungmin", 
        lastName: "Son", 
        address: "4th Avenue", 
        phoneNumber: "226-444-444", 
        isBooking: true, 
        nationality: "Korea", 
        credit: 700.00,
        courseList: ["Basic Massage", "Regular Massage", "Luxury Massage"],
        courseFees: [100, 110, 120]
      }  
    ];


    //function to generate additional customers based on existing ones
    const generateAdditionalCustomers = (count: number, baseCustomers: Customer[]): Customer[] => {
      let customers: Customer[] = [];
      let customerID = baseCustomers.length + 1; // Start with the next id number
      const nationalities = ["Korea", "USA", "Japan"];
      const courseLists = [
        ["Basic Massage", "Regular Massage", "Luxury Massage"],
        ["Regular Massage", "Luxury Massage"]
      ];

      for (let i = 0; i < count; i++) {
        const randomBaseCustomer = baseCustomers[i % baseCustomers.length]; // Recycle the base users names
        const newCustomer: Customer = {
          customerID: customerID++, // Increment the id for each new user
          firstName: `${randomBaseCustomer.firstName} `,
          lastName: `${randomBaseCustomer.lastName}`,
          address: `${randomBaseCustomer.address}`,
          phoneNumber: `${randomBaseCustomer.phoneNumber}`,
          isBooking: i % 2 === 0, // Alt between admin and non-admin
          nationality: nationalities[i % nationalities.length], // Assign a random department
          credit: Math.floor(Math.random() * 100000000 + 1000), //Random budget between 1000 and 100 000 000
          courseList: courseLists[i % courseLists.length], //asssign a random class list
          courseFees: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)), // Random grades between 0 and 100
          
        };
        customers.push(newCustomer);
      }
      return customers;
    };

    //Chhange this number to any number > 30 for more students      ↓↓↓
    const allCustomers = [...customers, ...generateAdditionalCustomers(4 - customers.length, customers)];

    return { customers: allCustomers };
  }
}
