// import customer class
import { Customer } from "../models/customer";

export const customerList: Customer[] = [
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
