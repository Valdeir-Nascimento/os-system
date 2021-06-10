package com.ossystem.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class TecnicoIdRequest {
    @NotNull
    private Long id;

}
