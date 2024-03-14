import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private readonly cartService: CartService) {}
  @Input('item') item: Item | null = null;

  Increase(){
    if(this.item){
      this.item.quantity++
      this.cartService.updateTotal()
    }
  }
  Decrease(){
    if(this.item){
      this.item.quantity--
      this.cartService.updateTotal()
      if(this.item?.quantity < 1){
        this.cartService.removeItemFromCart(this.item.id)
      }
    }
  }
}
