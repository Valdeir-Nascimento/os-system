package com.ossystem.controller;

import com.ossystem.dto.ClienteDTO;
import com.ossystem.dto.converter.ClienteDTOConverter;
import com.ossystem.dto.converter.ClienteRequestConverter;
import com.ossystem.dto.request.ClienteRequest;
import com.ossystem.event.RecursoCriadoEvent;
import com.ossystem.model.Cliente;
import com.ossystem.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;
    @Autowired
    private ClienteDTOConverter clienteDTOConverter;
    @Autowired
    private ClienteRequestConverter clienteRequestConverter;
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping(value = "/{idCliente}")
    public ResponseEntity<ClienteDTO> findById(@PathVariable Long idCliente) {
        var cliente = clienteService.findById(idCliente);
        return ResponseEntity.ok().body(clienteDTOConverter.toDTO(cliente));
    }

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> findAll() {
        List<Cliente> clientes = clienteService.findAll();
        return ResponseEntity.ok().body(clienteDTOConverter.toListDTO(clientes));
    }

    @PostMapping
    public ResponseEntity<ClienteDTO> create(@RequestBody @Valid ClienteRequest clienteRequest, HttpServletResponse response) {
        Cliente cliente = clienteRequestConverter.toCliente(clienteRequest);
        cliente = clienteService.salvar(cliente);
        publisher.publishEvent(new RecursoCriadoEvent(this, response, cliente.getId()));
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteDTOConverter.toDTO(cliente));
    }

    @PutMapping("/{idCliente}")
    public ResponseEntity<ClienteDTO> update(
            @PathVariable Long idCliente, @RequestBody @Valid ClienteRequest clienteRequest) {
        Cliente cliente = clienteRequestConverter.toCliente(clienteRequest);
        cliente = clienteService.update(idCliente, cliente);
        return ResponseEntity.ok().body(clienteDTOConverter.toDTO(cliente));
    }

    @DeleteMapping("/{idCliente}")
    public ResponseEntity<Void> delete(@PathVariable Long idCliente) {
        clienteService.delete(idCliente);
        return ResponseEntity.noContent().build();
    }

}
