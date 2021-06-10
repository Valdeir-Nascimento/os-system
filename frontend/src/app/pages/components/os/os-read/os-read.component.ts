import { OrdemServico } from './../../../../model/ordem_servico';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OrdemServicoService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  ordemServicoList: OrdemServico[] = [];

  displayedColumns: string[] = ['tecnico', 'cliente', 'dataAbertura', 'dataFechamento', 'prioridade', 'status', 'operacoes'];

  dataSource = new MatTableDataSource<OrdemServico>(this.ordemServicoList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: OrdemServicoService, private router: Router) { }

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ordemServicoList = resposta;
      this.dataSource = new MatTableDataSource<OrdemServico>(this.ordemServicoList);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void {
    this.router.navigate(['os/create']);
  }

  prioridade(tipo: any) {
    if (tipo == 'BAIXA') {
      return 'baixa';
    } else if (tipo == 'MEDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  }

}