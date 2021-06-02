package com.ossystem.dto.converter;

import com.ossystem.dto.OrdemServicoDTO;
import com.ossystem.model.OrdemServico;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrdemServicoDTOConverter {

    @Autowired
    private ModelMapper modelMapper;

    public OrdemServicoDTO toDTO(OrdemServico ordemServico) {
        return modelMapper.map(ordemServico, OrdemServicoDTO.class);
    }

    public List<OrdemServicoDTO> toListDTO(List<OrdemServico> ordemServicoList) {
        return ordemServicoList.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

}
