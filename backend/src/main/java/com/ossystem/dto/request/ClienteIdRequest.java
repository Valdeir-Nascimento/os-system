package com.ossystem.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class ClienteIdRequest {
    @NotNull
    private Long id;

}
