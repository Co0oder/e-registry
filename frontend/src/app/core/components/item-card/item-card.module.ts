import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ItemCardComponent } from './item-card.component';


@NgModule({
  declarations: [ItemCardComponent],
  exports: [ItemCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ItemCardModule { }
