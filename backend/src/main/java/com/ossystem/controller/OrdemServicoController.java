package com.ossystem.controller;

import com.ossystem.dto.OrdemServicoDTO;
import com.ossystem.dto.converter.OrdemServicoDTOConverter;
import com.ossystem.dto.converter.OrdemServicoRequestConverter;
import com.ossystem.dto.request.OrdemServicoRequest;
import com.ossystem.event.RecursoCriadoEvent;
import com.ossystem.model.OrdemServico;
import com.ossystem.service.OrdemServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/ordem-servico")
public class OrdemServicoController {
    @Autowired
    private OrdemServicoService ordemServicoService;
    @Autowired
    private OrdemServicoDTOConverter ordemServicoDTOConverter;
    @Autowired
    private OrdemServicoRequestConverter ordemServicoRequestConverter;
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping("/{idOrdemServico}")
    public ResponseEntity<OrdemServicoDTO> findById(@PathVariable Long idOrdemServico) {
        var ordemServico = ordemServicoService.findById(idOrdemServico);
        return ResponseEntity.ok().body(ordemServicoDTOConverter.toDTO(ordemServico));
    }

    @GetMapping
    public ResponseEntity<List<OrdemServicoDTO>> findById() {
        List<OrdemServico> ordemServicoList = ordemServicoService.findAll();
        return ResponseEntity.ok().body(ordemServicoDTOConverter.toListDTO(ordemServicoList));
    }

    @PostMapping
    public ResponseEntity<OrdemServicoDTO> create(
            @RequestBody @Valid OrdemServicoRequest ordemServicoRequest, HttpServletResponse response) {
        OrdemServico ordemServico = ordemServicoRequestConverter.to(ordemServicoRequest);
        ordemServico = ordemServicoService.salvar(ordemServico);
        publisher.publishEvent(new RecursoCriadoEvent(this, response, ordemServico.getId()));
        return ResponseEntity.status(HttpStatus.CREATED).body(ordemServicoDTOConverter.toDTO(ordemServico));
    }

    @PutMapping("/{idOrdemServico}")
    public ResponseEntity<OrdemServicoDTO> update(
            @PathVariable Long idOrdemServico, @RequestBody @Valid OrdemServicoRequest ordemServicoRequest) {
        OrdemServico ordemServicoAtual = ordemServicoService.findById(idOrdemServico);
        ordemServicoRequestConverter.copyToProperties(ordemServicoRequest, ordemServicoAtual);
        ordemServicoAtual = ordemServicoService.salvar(ordemServicoAtual);
        return ResponseEntity.ok().body(ordemServicoDTOConverter.toDTO(ordemServicoAtual));
    }

}
