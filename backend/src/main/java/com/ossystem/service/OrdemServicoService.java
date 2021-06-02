package com.ossystem.service;

import com.ossystem.model.OrdemServico;
import com.ossystem.repository.OrdemServicoRepository;
import com.ossystem.service.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrdemServicoService {
    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    public OrdemServico findById(Long idOrdermServico) {
        var ordermServico = ordemServicoRepository.findById(idOrdermServico);
        return ordermServico.orElseThrow(() -> new ObjectNotFoundException("OS não encontrada! Id: "
                + idOrdermServico + OrdemServico.class.getName()));
    }

    public List<OrdemServico> findAll() {
        return ordemServicoRepository.findAll();
    }

    public OrdemServico salvar(OrdemServico ordemServico) {
        if (ordemServico.getStatus().getCodigo().equals(2L)) {
            ordemServico.setDataFechamento(LocalDateTime.now());
        }
        return ordemServicoRepository.save(ordemServico);
    }

}
