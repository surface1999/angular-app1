import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  title = "Shopping Cart";
  @Input() cartItems: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
