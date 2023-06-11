import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', component: ProductsListComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
