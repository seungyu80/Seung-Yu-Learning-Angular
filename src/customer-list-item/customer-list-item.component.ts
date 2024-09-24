import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent implements OnInit {
  customerID: number = 0;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  phoneNumber: string = '';
  isBooking: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
      
  }

  private initializeValues(): void {
    
  }
  
}
