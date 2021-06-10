import { Tecnico } from './../../../../model/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  idTecnico = '';

  tecnico: Tecnico = {
   
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(private router: Router, private tecnicoService: TecnicoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idTecnico = this.route.snapshot.paramMap.get('idTecnico')!;
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.idTecnico).subscribe(resposta => {
      this.tecnico = resposta;
    })
  }

  delete(): void {
    this.tecnicoService.delete(this.idTecnico)
      .subscribe(resposta => {
        this.router.navigate(['tecnicos'])
        this.tecnicoService.message('Técnico removido com sucesso!')  ;
    }, ex => {
      if(ex.error.error.match('Técnico possui ordens de serviço, não pode ser removido!')) {
        this.tecnicoService.message(ex.error.error);
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['tecnicos'])
  }

}
