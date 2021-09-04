import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() products: Product[] = [];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeQuantity = new EventEmitter();

  ngOnInit(): void {
  }
  removeProduct(id: string){
    this.onRemoveProduct.emit(id);
  }

  updateQuantity(element: { value: any; }){
    this.onChangeQuantity.emit(element);
  }

}
