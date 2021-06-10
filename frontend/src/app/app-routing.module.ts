import { ClienteDeleteComponent } from './pages/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteEditComponent } from './pages/components/cliente/cliente-edit/cliente-edit.component';
import { TecnicoEditComponent } from './pages/components/tecnico/tecnico-edit/tecnico-edit.component';
import { TecnicoReadComponent } from './pages/components/tecnico/tecnico-read/tecnico-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { TecnicoCreateComponent } from './pages/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './pages/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './pages/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './pages/components/cliente/cliente-create/cliente-create.component';
import { OsReadComponent } from './pages/components/os/os-read/os-read.component';
import { OsCreateComponent } from './pages/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './pages/components/os/os-update/os-update.component';

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
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:idCliente',
    component: ClienteEditComponent
  },
  {
    path: 'clientes/delete/:idCliente',
    component: ClienteDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update',
    component: OsUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
