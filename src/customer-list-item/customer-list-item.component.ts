import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css'
})
export class CustomerListItemComponent implements OnInit {
  // In yourcontentListItem.component.ts, add a property that can be accepted as an input to the component.
  pageTitle: string = "Massage Customer List";

  constructor() {

  }

  ngOnInit(): void {
      
  }

  private initializeValues(): void {
    
  }
  
}
