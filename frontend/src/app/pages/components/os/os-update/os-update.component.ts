import { Router, ActivatedRoute } from '@angular/router';
import { OrdemServicoService } from './../../../../services/os.service';
import { ClienteService } from './../../../../services/cliente.service';
import { TecnicoService } from './../../../../services/tecnico.service';
import { OrdemServico } from 'src/app/model/ordem_servico';
import { Cliente } from './../../../../model/cliente';
import { Tecnico } from './../../../../model/tecnico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit {


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
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ordemServico.id = this.route.snapshot.paramMap.get('idOrdemServico');
    this.findById();
    this.getTecnicos();
    this.getClientes();
  }

  findById() : void {
    this.osService.findById(this.ordemServico.id).subscribe(resposta => {
      this.ordemServico = resposta;
    })
  }

  update(): void {

    console.log(this.ordemServico);

    this.osService.update(this.ordemServico).subscribe(resposta => {
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

  converterDados() : void {
    if(this.ordemServico.status == "ABERTO") {
      this.ordemServico.status = "ABERTO";
    } else if(this.ordemServico.status == "ANDAMENTO") {
      this.ordemServico.status = "ANDAMENTO";
    } else {
      this.ordemServico.status = "ENCERRADO";
    }

    
  }

}