import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products =[
    {id:1, name:'Watch', price:'109', color:'Black', available:'Available', image: 'assets/products/first.jpg' },
    {id:2, name:'Smart TV', price:'1010', color:'Black', available:'Available', image: 'assets/products/second.jpg' },
    {id:3, name:'iPhone', price:'10900', color:'Black', available:'Not Available', image: 'assets/products/third.jpg' },
    {id:4, name:'Refrigerator', price:'10209', color:'White', available:'Not Available', image: 'assets/products/fourth.jpg' },
    {id:5, name:'Laptop', price:'103339', color:'White', available:'Available', image: 'assets/products/fifth.jpg' }
  ];
}