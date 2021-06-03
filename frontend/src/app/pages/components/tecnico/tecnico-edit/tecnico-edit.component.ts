import { TecnicoService } from 'src/app/services/tecnico.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/model/tecnico';

@Component({
  selector: 'app-tecnico-edit',
  templateUrl: './tecnico-edit.component.html',
  styleUrls: ['./tecnico-edit.component.css']
})
export class TecnicoEditComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
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
