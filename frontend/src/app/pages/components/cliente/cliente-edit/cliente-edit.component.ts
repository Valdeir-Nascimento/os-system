import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  idCliente = '';

  cliente: Cliente = {
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

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

  update(): void {
    this.clienteService.update(this.cliente).subscribe(resposta => {
      this.router.navigate(['clientes']);
      this.clienteService.message('Cliente atualizado com sucesso!');
    }, ex => {
      if (ex.error.error.match('CPF já cadastrado na base de dados!')) {
        this.clienteService.message(ex.error.error);
      } else if (ex.error.erros[0].messageError === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.clienteService.message('CPF Inválido');
        console.log(ex.error.error);
      }
    })
  }


  validNome() {
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  validCpf() {
    if (this.cpf.invalid) {
      return 'CPF inválido';
    }
    return false;
  }

  validTelefone() {
    if (this.telefone.invalid) {
      return 'Telefone inválido!';
    }
    return false;
  }

  cancelar(): void {
    this.router.navigate(['clientes'])
  }

}
