

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPersonaComponent } from './pages/list-persona/list-persona.component';
import { FormPersonaComponent } from './pages/form-persona/form-persona.component';
import { EditPersonaComponent } from './pages/edit-persona/edit-persona.component';
import { EditProductoComponent } from './pages/edit-producto/edit-producto.component';
import { CreateProductoComponent } from './pages/create-producto/create-producto.component';
import { ListProductoComponent } from './pages/list-producto/list-producto.component';

const routes: Routes = [
  { path: 'list-persona', component: ListPersonaComponent },
  { path: 'form-persona', component: FormPersonaComponent },
  { path: 'edit-persona', component: EditPersonaComponent },
  { path: 'edit-producto', component: EditProductoComponent },
  { path: 'create-producto', component: CreateProductoComponent },
  { path: 'list-producto', component: ListProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
