import { Injectable } from '@angular/core';
import { CartItems } from '../models/carItems';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addCartItem(product:Product)
  {
   let item = CartItems.find(c=>c.product.productId===product.productId);
  if(item)
  {
    item.quantity +=1;
  }
  else
  {
    let cartItem = new CartItem();
    cartItem.product = product;
    cartItem.quantity = 1;
    CartItems.push(cartItem);

  }

  }

  removeCartItem(product:Product)
  {
    let item = CartItems.find(c=>c.product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1)
  }

  list():CartItem[]
  {
    return CartItems;
  }

}
