import { Component, input, Input, OnInit } from '@angular/core';
import { NgIf } from "@angular/common";
import { Customer } from '../models/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list-item',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent implements OnInit {
  customer: Customer | undefined;
  customerList: Customer[] = [];
  currentIndex: number = 0;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
      this.customerService.retrieveCustomers().subscribe(customers => {
        this.customerList = customers;
  
        // Subscribe to paramMap changes to actually see the page changing
        //If we dont do this, the URL will change but the view will not
        this.route.paramMap.subscribe(params => {
          const customerID = Number(params.get('customerID'));
          if (customerID) {
            this.currentIndex = this.customerList.findIndex(customer => customer.customerID === customerID);
            this.customer = this.customerList[this.currentIndex];
          }
        });
      });
    }

  //function to go back to customer-list view
  goBack(): void {
    this.router.navigate(['/customers']);
  }

  //function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.customerList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/customers', this.customerList[this.currentIndex].customerID]);
    }
  }
  //function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/customers', this.customerList[this.currentIndex].customerID]);
    }
  }




  // In yourcontentListItem.component.ts, add a property that can be accepted as an input to the component.
  // @Input() customer?: Customer;

}
