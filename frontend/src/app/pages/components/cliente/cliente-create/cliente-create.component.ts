import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(resposta => {
      this.router.navigate(['clientes']);
      this.clienteService.message('Cliente salvo com sucesso!');
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
