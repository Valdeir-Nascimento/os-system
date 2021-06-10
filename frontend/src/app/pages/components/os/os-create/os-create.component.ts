import { Validators, FormControl } from '@angular/forms';
import { Cliente } from './../../../../model/cliente';
import { Tecnico } from './../../../../model/tecnico';
import { Component, OnInit } from '@angular/core';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemServico } from 'src/app/model/ordem_servico';
import { OrdemServicoService } from 'src/app/services/os.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  obs = ''
  tecnico: Tecnico = {
    cpf: '',
    nome: '',
    telefone: ''
  }

  cliente: Cliente = {
    cpf: '',
    nome: '',
    telefone: ''
  }

  ordemServico: OrdemServico = {
    tecnico: this.tecnico,
    cliente: this.cliente,
    observacao: this.obs,
    status: '',
    prioridade: '',

  }
  tecnicos: Tecnico[] = [];
  clientes: Cliente[] = [];

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private osService: OrdemServicoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTecnicos();
    this.getClientes();
  }

  create(): void {
    this.osService.create(this.ordemServico).subscribe(resposta => {
      this.osService.message('Ordem de serviço salva com sucesso!');
      this.router.navigate(['os']);

    }, ex => {
      console.log(ex);
    })
  }

  getTecnicos(): void {
    this.tecnicoService.findAll()
      .subscribe(resposta => {
        this.tecnicos = resposta;
      })
  }

  getClientes(): void {
    this.clienteService.findAll()
      .subscribe(resposta => {
        this.clientes = resposta;
      })
  }

  cancelar(): void {
    this.router.navigate(['os']);
  }

}
