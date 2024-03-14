import { Injectable, inject } from '@angular/core';
import { Item } from '../../models/item';
import { TotalService } from 'src/app/total/services/total.service';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private readonly totalService: TotalService) {}
  private itemId = 1;
  private itemList: Item[] = [];
  async getCart() {
    return this.itemList;
  }
  
  addItemToCart(item: Item){
    const index = this.itemList.findIndex(e => e.id === item.id)
    if(index ==-1){
      item.quantity = 1;
      this.itemList.push(item)
    }
    else{
      this.itemList[index].quantity++
    }
    this.updateTotal()
  }

  removeItemFromCart(id: string){
    const index = this.itemList.findIndex(e => e.id === id)
    if(index !== -1){
      this.itemList.splice(index, 1)
    }
  }

  async updateTotal(){
    this.totalService.calculate(await this.getTotal())
  }
  async getTotal(){
    let total = 0
    this.itemList.forEach(element => {
      total += element.price*element.quantity
    });
    return Math.floor(total * 100)/100
  }
}