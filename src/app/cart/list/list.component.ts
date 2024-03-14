import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly cartService: CartService) {}
  items = this.cartService.getCart();
}
