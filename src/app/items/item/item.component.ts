import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input('item') item: Item | null = null;
  @Output('update') update = new EventEmitter<Item>();

  AddToCart(){
    if (!this.item) {
      throw new Error('cannot toggle complete on null');
    }
    this.update.emit({
      ...this.item
    });
  }
}
