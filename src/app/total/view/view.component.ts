import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TotalService } from '../services/total.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-total-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy{
  constructor(private readonly totalService: TotalService) {}
  private totalSub: Subscription | undefined;
  total: number = 0
  // @Input('total') total: number = 0;

  ngOnInit(): void {
    this.totalSub = this.totalService.total$.subscribe(
      (t: number) => {
        this.total = t
      }
    )
  }

  ngOnDestroy(): void {
    if(this.totalSub){
      this.totalSub.unsubscribe
    }
  }
}
