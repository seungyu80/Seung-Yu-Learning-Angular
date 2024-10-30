import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})

export class ModifyListItemComponent implements OnInit {
  customer: Customer | undefined;
  customerForm: FormGroup;

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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerService.retrieveCustomerById(+id).subscribe(customer => {
        if(customer) {
          this.customer = customer;

          this.customerForm.patchValue(customer);
        }
      });
    }
  }

}
