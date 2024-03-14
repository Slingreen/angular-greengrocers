import { Injectable, inject } from '@angular/core';
import { Item } from '../../models/item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TotalService {
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  total = 0
  total$ = this.totalSubject.asObservable();
  calculate(number: number) {
    this.totalSubject.next(number)
  }
  getTotal(){
    return this.totalSubject
  }
}