import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  product = {
    productId: 1,
    productName: "bardak",
    categoryId: 1,
    unitPrice: 13
  }
  product1 = {
    productId: 2,
    productName: "keyboard",
    categoryId: 1,
    unitPrice: 13
  }
  product2 = {
    productId: 3,
    productName: "mouse",
    categoryId: 1,
    unitPrice: 13
  }
  product3 = {
    productId: 4,
    productName: "monitor",
    categoryId: 1,
    unitPrice: 13
  }

  products = [this.product, this.product1, this.product2, this.product3]
}
