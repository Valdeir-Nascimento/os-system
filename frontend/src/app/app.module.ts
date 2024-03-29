import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './pages/components/template/header/header.component';
import { FooterComponent } from './pages/components/template/footer/footer.component';
import { NavComponent } from './pages/components/template/nav/nav.component';
import { HomeComponent } from './pages/components/home/home.component';
import { TecnicoReadComponent } from './pages/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './pages/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoEditComponent } from './pages/components/tecnico/tecnico-edit/tecnico-edit.component';
import { TecnicoDeleteComponent } from './pages/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './pages/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './pages/components/cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './pages/components/cliente/cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './pages/components/cliente/cliente-delete/cliente-delete.component';
import { OsReadComponent } from './pages/components/os/os-read/os-read.component';
import { OsCreateComponent } from './pages/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './pages/components/os/os-update/os-update.component';
import { OsViewComponent } from './pages/components/os/os-view/os-view.component';
import { MatMenuModule } from '@angular/material/menu';
import { OsClosedComponent } from './pages/components/os/os-closed/os-closed.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoReadComponent,
    TecnicoCreateComponent,
    TecnicoEditComponent,
    TecnicoDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    ClienteDeleteComponent,
    OsReadComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    OsClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
