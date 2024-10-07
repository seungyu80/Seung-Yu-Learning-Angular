import { Component, input, Input, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list-item',
  standalone: true,
  imports: [ NgIf, CustomerListComponent],
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent {
  // In yourcontentListItem.component.ts, add a property that can be accepted as an input to the component.
  @Input() customer?: Customer;

}
