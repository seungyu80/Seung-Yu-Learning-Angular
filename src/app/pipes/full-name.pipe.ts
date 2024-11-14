import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/customer';

@Pipe({
  name: 'fullName',
  standalone: true
})
export class FullNamePipe implements PipeTransform {

  transform(customer: Customer): string {
    return `${customer.firstName} ${customer.lastName}`;
  }

}
