import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './Guards/auth.guard';
import { ProductsModule } from './products.module';

const routes: Routes = [
  {path: '', redirectTo: 'products-list', pathMatch: 'full' },
  {path: 'create-product', component: CreateProductComponent , canActivate: [authGuard]},
  {path: 'edti-productc/:id', component: CreateProductComponent, canActivate: [authGuard] },
  // {path: 'products-list',loadChildren : () => import('./products.module').then(m => m.ProductsModule)  ,  canActivate: [authGuard] },
  {path: 'products-list',component: ProductsListComponent ,  canActivate: [authGuard] },
  {path: 'single-product/:id', component: SingleProductComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  // {path: 'verify-email-address', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
