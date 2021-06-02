package com.ossystem.exceptionhandler;

import com.ossystem.service.exceptions.DataIntegratyViolationException;
import com.ossystem.service.exceptions.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<StandardError> handlerObjectNotFoundException(ObjectNotFoundException ex) {
        StandardError standardError = new StandardError(
                System.currentTimeMillis(),
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(standardError);
    }

    @ExceptionHandler(DataIntegratyViolationException.class)
    public ResponseEntity<StandardError> handlerDataIntegratyViolationException(DataIntegratyViolationException ex) {
        StandardError standardError = new StandardError(
                System.currentTimeMillis(),
                HttpStatus.BAD_REQUEST.value(),
                ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(standardError);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<StandardError> handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        ValidationError validationError = new ValidationError(
                System.currentTimeMillis(),
                HttpStatus.BAD_REQUEST.value(),
                "Error na validação dos campos!");

        ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .forEach(fieldError -> {
                    validationError.addError(fieldError.getField(), fieldError.getDefaultMessage());
                });

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationError);
    }


}
