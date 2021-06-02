package com.ossystem.dto.converter;

import com.ossystem.dto.request.OrdemServicoRequest;
import com.ossystem.model.OrdemServico;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrdemServicoRequestConverter {

    @Autowired
    private ModelMapper modelMapper;

    public OrdemServico to(OrdemServicoRequest ordemServicoRequest) {
        return modelMapper.map(ordemServicoRequest, OrdemServico.class);
    }

    public void copyToProperties(OrdemServicoRequest ordemServicoRequest, OrdemServico ordemServico) {
        modelMapper.map(ordemServicoRequest, ordemServico);
    }

}
