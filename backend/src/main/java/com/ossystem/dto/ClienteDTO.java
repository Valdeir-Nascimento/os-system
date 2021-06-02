package com.ossystem.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ClienteDTO {
    private Long id;
    private String nome;
    private String cpf;
    private String telefone;
}
