package com.ossystem.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ossystem.model.enums.Prioridade;
import com.ossystem.model.enums.Status;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class OrdemServicoDTO {
    private Long id;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataAbertura;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataFechamento;
    private String observacao;
    private Prioridade prioridade;
    private Status status;
    private TecnicoDTO tecnico;
    private ClienteDTO cliente;
}
