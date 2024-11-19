export interface Customer {
    customerID: number;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    isBooking?: boolean;
    nationality: string;
    credit: number;
    courseList: string[];
    courseFees: number[];
}