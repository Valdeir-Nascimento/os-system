import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Tecnico } from './../../../../model/tecnico';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements AfterViewInit {

  clientes: Cliente[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'operacoes'];

  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngAfterViewInit() {

    this.findAll();
  }

  findAll(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.clientes);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void {
    this.router.navigate(['tecnicos/create']);
  }

}