import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaGroupComponent } from './criteria-group.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResultListModule } from '../result-list/result-list.module';
import { ItemCardModule } from '../item-card/item-card.module';

@NgModule({
  declarations: [CriteriaGroupComponent],
  exports: [CriteriaGroupComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ResultListModule,
    ItemCardModule
  ]
})
export class CriteriaGroupModule { }
