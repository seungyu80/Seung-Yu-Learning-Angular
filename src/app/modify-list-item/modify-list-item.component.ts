import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {DisableButtonDirective} from "../directives/disable-button.directive";
import { HighlightOnFocusDirective } from '../directives/highlight-on-focus.directive';
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ 
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    DisableButtonDirective,
    MatCheckbox,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
   ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})

export class ModifyListItemComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
  ){
    this.customerForm = this.fb.group({
      

      customerID: [customerService.generateNewCustomerId()], //ID is required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      address: [''],
      phoneNumber: [''],
      isBooking: [false],
      nationality: ['']
    });
  }

  ngOnInit(): void {
    const customerID = Number(this.route.snapshot.paramMap.get('customerID'));
    if(customerID) {
      this.customerService.retrieveCustomerById(customerID).subscribe ({
        next: customer => {
          if(customer) {
            this.customerForm.patchValue(customer);
          }
        },
        error: err => {
          this.error = 'Error fetching customer';
          console.error('Error fetching customer:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if(this.customerForm.valid) {
      const customer: Customer = this.customerForm.value;

      if(customer.customerID) {
        this.customerService.updateCustomer(customer).subscribe(() => this.router.navigate(['/customers']));
      }else {
        customer.customerID = this.customerService.generateNewCustomerId();
        this.customerService.addCustomer(customer).subscribe(() => this.router.navigate(['customers']));
      }
    }
  }

  onDelete(): void {
    const customerID = this.customerForm.value.customerID;
    if (customerID) {
      this.customerService.deleteCustomer(customerID).subscribe(() => this.router.navigate(['/customers']));
    }
  }

  navigateToCustomerList(): void {
    this.router.navigate(['/customers']);
  }


}
