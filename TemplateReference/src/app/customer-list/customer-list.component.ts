import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'AAA', address: '', city: 'CCC', country: 'DDD'},
    {customerNo: 2, name: 'EEE', address: '', city: 'GGG', country: 'HHH'},
    {customerNo: 3, name: 'III', address: '', city: 'KKK', country: 'LLL'},
    {customerNo: 4, name: 'MMM', address: '', city: 'OOO', country: 'PPP'}
  ]

}
