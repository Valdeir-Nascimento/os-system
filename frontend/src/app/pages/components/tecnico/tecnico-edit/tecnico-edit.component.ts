import { TecnicoService } from 'src/app/services/tecnico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Tecnico } from 'src/app/model/tecnico';

@Component({
  selector: 'app-tecnico-edit',
  templateUrl: './tecnico-edit.component.html',
  styleUrls: ['./tecnico-edit.component.css']
})
export class TecnicoEditComponent implements OnInit {

  idTecnico = '';

  tecnico: Tecnico = {
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

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

  update(): void {
    this.tecnicoService.update(this.tecnico).subscribe(resposta => {
      this.router.navigate(['tecnicos']);
      this.tecnicoService.message('Técnico atualizado com sucesso!');
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
    this.router.navigate(['tecnicos'])
  }

}
