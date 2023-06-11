import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { SingleProductComponent } from 'projects/crud-products/src/app/Components/single-product/single-product.component';
import { CreateProjectComponent } from './Components/create-project/create-project.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  // {path: 'projects' , component: ProjectListComponent, children: [

  //   {path: 'create' , component: CreateProjectComponent},
  //   {path: ':id' , component: SingleProductComponent},
  // ]},
  {path: 'projects' , component: ProjectListComponent},
  {path: 'projects/create' , component: CreateProjectComponent},
  {path: 'projects/:id' , component: SingleProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
