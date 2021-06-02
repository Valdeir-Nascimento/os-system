package com.ossystem.dto.converter;

import com.ossystem.dto.ClienteDTO;
import com.ossystem.model.Cliente;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ClienteDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ClienteDTO toDTO(Cliente cliente) {
        return modelMapper.map(cliente, ClienteDTO.class);
    }

    public List<ClienteDTO> toListDTO(List<Cliente> clientes) {
        return clientes.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
