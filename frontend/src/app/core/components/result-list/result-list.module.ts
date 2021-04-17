import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './result-list.component';



@NgModule({
  declarations: [ResultListComponent],
  exports: [ResultListComponent],
  imports: [
    CommonModule
  ]
})
export class ResultListModule { }
