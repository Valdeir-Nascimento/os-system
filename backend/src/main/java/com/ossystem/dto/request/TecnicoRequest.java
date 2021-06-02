package com.ossystem.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Setter
@Getter
public class TecnicoRequest {

    @NotBlank(message = "O campo NOME é requerido")
    private String nome;
    @CPF
    @NotEmpty(message = "O campo CPF é requerido")
    private String cpf;
    @NotBlank(message = "O campo TELEFONE é requerido")
    private String telefone;
}
