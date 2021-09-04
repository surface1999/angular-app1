import { Component, OnInit } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name:'Samsung Galaxy Note 8',
      description:'Made in Korea',
      price: 950,
      quantity: 2,
      thumbnail: '../../../assets/note8.jpg'

    },
    {
      id: '2',
      name:'Samsung Galaxy Note 8',
      description:'Made in Korea',
      price: 820,
      quantity: 3,
      thumbnail: '../../../assets/s8.jpg'
    },
    {
      id: '3',
      name:'Samsung Galaxy Note 8',
      description:'Made in Korea',
      price: 820,
      quantity: 3,
      thumbnail: '../../../assets/note8.jpg'
    },
    {
      id: '4',
      name:'Samsung Galaxy Note 8',
      description:'Made in Korea',
      price: 820,
      quantity: 3,
      thumbnail: '../../../assets/s8.jpg'
    },
    {
      id: '5',
      name:'Samsung Galaxy Note 8',
      description:'Made in Korea',
      price: 820,
      quantity: 3,
      thumbnail: '../../../assets/note8.jpg'
    }
  ];
  cartItems:number = 0;
  subTotal:number=0;
  total:number=0;

  updateProduct(){
    this.cartItems = this.products.length;
    this.subTotal = this.products.reduce((a, b)=>{
      return a+ b.quantity;
    }, 0)
    this.total = this.products.reduce((total, item)=>{
      return total + item.price*item.quantity;
    }, 0)
  }
  ngOnInit(){
    this.updateProduct();
  }

  removeProduct(id:string){
    let index = this.products.findIndex(product=>product.id === id);
    this.products.splice(index, 1);
    this.cartItems = this.products.length;
    this.updateProduct();
  }

  changQuantity(element:any){
    let index = this.products.findIndex(product => product.id === element.id);
    this.products[index].quantity = parseInt(element.value) || 0;
    this.updateProduct();
  }
}
