package com.ossystem.model.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Status {
    ABERTO(0L, "ABERTO"),
    ANDAMENTO(1L, "ANDAMENTO"),
    ENCERRADO(2L, "ENCERRADO");

    private Long codigo;
    private String descricao;

    public static Status toEnum(Integer codigo) {
        if (codigo == null) {
            return null;
        }
        for (Status status : Status.values()) {
            if (codigo.equals(status.getCodigo())) {
                return status;
            }
        }
        throw new IllegalArgumentException("Status inválido! " + codigo);
    }
}
