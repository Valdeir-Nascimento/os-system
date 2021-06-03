import { Tecnico } from './../../../../model/tecnico';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements AfterViewInit {

  tecnicos: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'operacoes'];

  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tecnicoService: TecnicoService, private router: Router) { }

  ngAfterViewInit() {

    this.findAll();
  }

  findAll(): void {
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void {
    this.router.navigate(['tecnicos/create']);
  }

}