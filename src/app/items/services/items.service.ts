import { Injectable, inject } from '@angular/core';
import { Item } from '../../models/item';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private readonly cartService: CartService) {}
  private itemId = 1;
  private itemList: Item[] = [];
  
  http = inject(HttpClient)
  async getItems() {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}groceries`));
    // @ts-ignore
    this.itemList = result;
    return this.itemList;
  }

  updateItem(item: Item){
    this.cartService.addItemToCart(item)
  }
}