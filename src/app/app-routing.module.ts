import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartviewComponent } from './cart/cartview/cartview.component';

import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductListComponent},
  {path:'cart',component:CartviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
