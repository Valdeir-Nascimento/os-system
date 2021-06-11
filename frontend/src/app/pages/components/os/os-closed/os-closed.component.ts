import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OrdemServico } from 'src/app/model/ordem_servico';
import { OrdemServicoService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent implements AfterViewInit {

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
      resposta.forEach(x => {
        if(x.status == "ENCERRADO") {
          this.ordemServicoList.push(x);
        }
      })
      this.dataSource = new MatTableDataSource<OrdemServico>(this.ordemServicoList);
      this.dataSource.paginator = this.paginator;
    })
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