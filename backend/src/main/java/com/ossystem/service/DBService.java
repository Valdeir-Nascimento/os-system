package com.ossystem.service;

import com.ossystem.model.Cliente;
import com.ossystem.model.OrdemServico;
import com.ossystem.model.Tecnico;
import com.ossystem.model.enums.Prioridade;
import com.ossystem.model.enums.Status;
import com.ossystem.repository.ClienteRepository;
import com.ossystem.repository.OrdemServicoRepository;
import com.ossystem.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class DBService {
    @Autowired
    private TecnicoRepository tecnicoRepository;
    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    public void instanciaDB() {
        Tecnico t1 = new Tecnico(null, "Valdeir Nascimento", "985.338.430-20", "(91) 98112-4566");
        Cliente c1 = new Cliente(null, "Betina Campos", "822.846.560-21", "(91) 98111-4544");
        OrdemServico os1 = new OrdemServico();
        os1.setId(null);
        os1.setPrioridade(Prioridade.ALTA);
        os1.setStatus(Status.ABERTO);
        os1.setCliente(c1);
        os1.setTecnico(t1);

        t1.getServicos().add(os1);
        c1.getServicos().add(os1);

        tecnicoRepository.saveAll(Arrays.asList(t1));
        clienteRepository.saveAll(Arrays.asList(c1));
        ordemServicoRepository.saveAll(Arrays.asList(os1));
    }
}
