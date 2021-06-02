package com.ossystem.exceptionhandler;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class StandardError {
    private Long timestamp;
    private Integer statusCode;
    private String error;
}
