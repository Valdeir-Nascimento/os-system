package com.ossystem.controller;

import com.ossystem.dto.TecnicoDTO;
import com.ossystem.dto.converter.TecnicoDTOConverter;
import com.ossystem.dto.converter.TecnicoRequestConverter;
import com.ossystem.dto.request.TecnicoRequest;
import com.ossystem.event.RecursoCriadoEvent;
import com.ossystem.model.Tecnico;
import com.ossystem.service.TecnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/tecnicos")
public class TecnicoController {

    @Autowired
    private TecnicoService tecnicoService;
    @Autowired
    private TecnicoDTOConverter tecnicoDTOConverter;
    @Autowired
    private TecnicoRequestConverter tecnicoRequestConverter;
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping(value = "/{idTecnico}")
    public ResponseEntity<TecnicoDTO> findById(@PathVariable Long idTecnico) {
        var tecnico = tecnicoService.findById(idTecnico);
        return ResponseEntity.ok().body(tecnicoDTOConverter.toDTO(tecnico));
    }

    @GetMapping
    public ResponseEntity<List<TecnicoDTO>> findAll() {
        List<Tecnico> tecnicos = tecnicoService.findAll();
        return ResponseEntity.ok().body(tecnicoDTOConverter.toListDTO(tecnicos));
    }

    @PostMapping
    public ResponseEntity<TecnicoDTO> create(@RequestBody @Valid TecnicoRequest tecnicoRequest, HttpServletResponse response) {
        Tecnico tecnico = tecnicoRequestConverter.toTecnico(tecnicoRequest);
        tecnico = tecnicoService.salvar(tecnico);
        publisher.publishEvent(new RecursoCriadoEvent(this, response, tecnico.getId()));
        return ResponseEntity.status(HttpStatus.CREATED).body(tecnicoDTOConverter.toDTO(tecnico));
    }

    @PutMapping("/{idTecnico}")
    public ResponseEntity<TecnicoDTO> update(
            @PathVariable Long idTecnico, @RequestBody @Valid TecnicoRequest tecnicoRequest) {
        Tecnico tecnico = tecnicoRequestConverter.toTecnico(tecnicoRequest);
        tecnico = tecnicoService.update(idTecnico, tecnico);
        return ResponseEntity.ok().body(tecnicoDTOConverter.toDTO(tecnico));
    }

    @DeleteMapping("/{idTecnico}")
    public ResponseEntity<Void> delete(@PathVariable Long idTecnico) {
        tecnicoService.delete(idTecnico);
        return ResponseEntity.noContent().build();
    }

}
