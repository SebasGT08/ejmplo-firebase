

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPersonaComponent } from './pages/list-persona/list-persona.component';
import { FormPersonaComponent } from './pages/form-persona/form-persona.component';
import { EditPersonaComponent } from './pages/edit-persona/edit-persona.component';

const routes: Routes = [
  { path: 'list-persona', component: ListPersonaComponent },
  { path: 'form-persona', component: FormPersonaComponent },
  { path: 'edit-persona', component: EditPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
