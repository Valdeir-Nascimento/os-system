import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from './../../../../model/tecnico';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(private router: Router, private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.tecnicoService.create(this.tecnico).subscribe(resposta => {
      this.router.navigate(['tecnicos']);
      this.tecnicoService.message('Técnico salvo com sucesso!');
    }, ex => {
      if (ex.error.error.match('CPF já cadastrado na base de dados!')) {
        this.tecnicoService.message(ex.error.error);
      } else if (ex.error.erros[0].messageError === 'número do registro de contribuinte individual brasileiro (CPF) inválido') {
        this.tecnicoService.message('CPF Inválido');
        console.log(ex.error.error);
      } 

    })
  }

  validNome() {
    if(this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
  }

  validCpf() {
    if(this.cpf.invalid) {
      return 'CPF inválido';
    }
    return false;
  }

  validTelefone() {
    if(this.telefone.invalid) {
      return 'Telefone inválido!';
    }
    return false;
  }

  cancelar(): void {
    this.router.navigate(['tecnicos'])
  }

}
