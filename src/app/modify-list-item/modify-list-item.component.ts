import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ 
    NgIf,
    FormsModule,
    ReactiveFormsModule
   ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})

export class ModifyListItemComponent implements OnInit {
  customer: Customer | undefined;
  customerForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ){
    this.customerForm = this.fb.group({
      

      customerID: ['', Validators.required], //ID is required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      address: [''],
      phoneNumber: [''],
      isBooking: [false],
      nationality: ['']
    });
  }

  ngOnInit(): void {
    const customerID = this.route.snapshot.paramMap.get('customerID');
    if (customerID) {
      this.customerService.retrieveCustomerById(+customerID).subscribe(customer => {
        if(customer) {
          this.customer = customer;

          this.customerForm.patchValue(customer);
        }
      });
    }
  }

  onSubmit(): void {
    const custmer: Customer = this.customerForm.value;

    // Check if we're updating an existing customer
    if (custmer.customerID) {
      this.customerService.updateCustomer(custmer);
    } else {
      // For adding a new customer, generate a new ID
      const newCustomerId = this.customerService.generateNewCustomerId(); // This method will create a new ID
      custmer.customerID = newCustomerId;
      this.customerService.addCustomer(custmer);
    }

    this.router.navigate(['/customers']);
  }

  onDelete(): void {
    const customerID = this.customerForm.get('customerID')?.value;
    if (customerID) {
      this.customerService.deleteCustomer(customerID);
      this.router.navigate(['/customers']);
    }
  }

  navigateToCustomerList(): void {
    this.router.navigate(['/customers']);
  }


}
