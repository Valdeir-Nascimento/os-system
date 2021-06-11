package com.ossystem.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ossystem.dto.ClienteDTO;
import com.ossystem.dto.TecnicoDTO;
import com.ossystem.model.enums.Prioridade;
import com.ossystem.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class OrdemServicoRequest {


    private String observacao;
    private Prioridade prioridade = Prioridade.BAIXA;
    private Status status = Status.ABERTO;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataAbertura;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataFechamento;

    private TecnicoIdRequest tecnico;
    private ClienteIdRequest cliente;
}
