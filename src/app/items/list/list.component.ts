import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly itemsService: ItemsService) {}
  items = this.itemsService.getItems("");

  updateItem(item: Item) {
    this.itemsService.updateItem(item);
  }

  getFIlter(s: string){
    this.items = this.itemsService.getItems(s)
  }
}
