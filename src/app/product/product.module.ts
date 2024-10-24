import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ProductListComponent,
 

  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatToolbarModule,
    MatButton,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule

  ]
})
export class ProductModule { }
