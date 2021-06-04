import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  
  idCliente = '';

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(private router: Router, private clienteService: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.paramMap.get('idCliente')!;
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.idCliente).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  delete(): void {
    this.clienteService.delete(this.idCliente)
      .subscribe(resposta => {
        this.router.navigate(['tecnicos'])
        this.clienteService.message('Cliente removido com sucesso!')  ;
    }, ex => {
      if(ex.error.error.match('Cliente possui ordens de serviço, não pode ser removido!')) {
        this.clienteService.message(ex.error.error);
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }

}
