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
    id: '',
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

  

  cancelar(): void {
    this.router.navigate(['tecnicos'])
  }

}
