import { TecnicoEditComponent } from './pages/components/tecnico/tecnico-edit/tecnico-edit.component';
import { TecnicoReadComponent } from './pages/components/tecnico/tecnico-read/tecnico-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { TecnicoCreateComponent } from './pages/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './pages/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './pages/components/cliente/cliente-read/cliente-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent,
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnicos/update/:idTecnico',
    component: TecnicoEditComponent
  },
  {
    path: 'tecnicos/delete/:idTecnico',
    component: TecnicoDeleteComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
