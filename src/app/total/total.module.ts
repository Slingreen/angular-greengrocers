import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';

import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ViewComponent]
})
export class TotalModule { }
