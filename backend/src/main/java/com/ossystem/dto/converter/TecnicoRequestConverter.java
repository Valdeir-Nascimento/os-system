package com.ossystem.dto.converter;

import com.ossystem.dto.request.TecnicoRequest;
import com.ossystem.model.Tecnico;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TecnicoRequestConverter {

    @Autowired
    private ModelMapper modelMapper;

    public Tecnico toTecnico(TecnicoRequest tecnicoRequest) {
        return modelMapper.map(tecnicoRequest, Tecnico.class);
    }

    public void copyToProperties(TecnicoRequest tecnicoRequest, Tecnico tecnico) {
        modelMapper.map(tecnicoRequest, tecnico);
    }

}
