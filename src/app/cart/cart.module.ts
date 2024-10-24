import { NgModule } from '@angular/core';


import { CartviewComponent } from './cartview/cartview.component';

import { MatCardModule } from '@angular/material/card';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    CartviewComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule

  ]
})
export class CartModule { }
