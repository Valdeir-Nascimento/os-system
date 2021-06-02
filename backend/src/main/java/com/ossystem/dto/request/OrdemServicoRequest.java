package com.ossystem.dto.request;

import com.ossystem.dto.ClienteDTO;
import com.ossystem.dto.TecnicoDTO;
import com.ossystem.model.enums.Prioridade;
import com.ossystem.model.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class OrdemServicoRequest {

    @NotBlank(message = "O campo OBSERVAÇÕES é requerido")
    private String observacao;
    private Prioridade prioridade = Prioridade.BAIXA;
    private Status status = Status.ABERTO;
    @Valid
    private TecnicoDTO tecnico;
    @Valid
    private ClienteDTO cliente;
}
