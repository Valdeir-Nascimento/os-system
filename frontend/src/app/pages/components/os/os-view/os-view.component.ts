import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { OrdemServico } from 'src/app/model/ordem_servico';
import { Tecnico } from 'src/app/model/tecnico';
import { OrdemServicoService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private osService: OrdemServicoService, private router: Router) { }

  ngOnInit(): void {
    this.ordemServico.id = this.route.snapshot.paramMap.get('idOrdemServico');
    this.findById();
  }

  findById() {
    this.osService.findById(this.ordemServico.id)
      .subscribe(resposta => {
      this.ordemServico = resposta;
    })
  }

  voltar() : void {
    this.router.navigate(['os']);
  }

}
