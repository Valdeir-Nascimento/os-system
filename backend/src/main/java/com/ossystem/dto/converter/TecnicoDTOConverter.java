package com.ossystem.dto.converter;

import com.ossystem.dto.TecnicoDTO;
import com.ossystem.model.Tecnico;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TecnicoDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public TecnicoDTO toDTO(Tecnico tecnico) {
        return modelMapper.map(tecnico, TecnicoDTO.class);
    }

    public List<TecnicoDTO> toListDTO(List<Tecnico> tecnicos) {
        return tecnicos.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
