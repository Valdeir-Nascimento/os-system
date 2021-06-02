package com.ossystem.dto.converter;

import com.ossystem.dto.request.ClienteRequest;
import com.ossystem.model.Cliente;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ClienteRequestConverter {

    @Autowired
    private ModelMapper modelMapper;

    public Cliente toCliente(ClienteRequest clienteRequest) {
        return modelMapper.map(clienteRequest, Cliente.class);
    }

    public void copyToProperties(ClienteRequest clienteRequest, Cliente cliente) {
        modelMapper.map(clienteRequest, cliente);
    }

}
