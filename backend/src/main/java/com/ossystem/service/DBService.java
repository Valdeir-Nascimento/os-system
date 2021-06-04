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
        Tecnico t2 = new Tecnico(null, "Elton Cesar", "834.479.410-22", "(91) 98111-4555");
        Tecnico t3 = new Tecnico(null, "Fábio de Lima", "664.760.280-14", "(91) 98777-4444");
        Tecnico t4 = new Tecnico(null, "Márcio Ballem", "052.505.360-34", "(91) 98899-3333");
        Tecnico t5 = new Tecnico(null, "Francisco Alves", "146.518.940-89", "(91) 98888-7878");
        Tecnico t6 = new Tecnico(null, "Rodrigo Carneiro", "914.205.200-91", "(91) 98585-1033");

        Cliente c1 = new Cliente(null, "Betina Campos", "822.846.560-21", "(91) 98111-4544");
        Cliente c2 = new Cliente(null, "Maria Edna", "771.704.790-01", "(91) 98541-0000");
        Cliente c3 = new Cliente(null, "Adriana Oliveira", "291.772.840-03", "(91) 98111-8899");
        Cliente c4 = new Cliente(null, "Socorro da Silva", "830.143.250-07", "(91) 98111-9999");
        Cliente c5 = new Cliente(null, "Biatriz Costa", "981.304.150-11", "(91) 98838-7070");
        Cliente c6 = new Cliente(null, "Leno Carneiro", "130.703.100-52", "(91) 98114-0001");

        OrdemServico os1 = new OrdemServico(null, "PC com defeito", t1, c1);
        OrdemServico os2 = new OrdemServico(null, "PC com defeito", t2, c2);
        OrdemServico os3 = new OrdemServico(null, "PC com defeito", t3, c3);

        t1.getServicos().add(os1);
        c1.getServicos().add(os1);

        t2.getServicos().add(os2);
        c2.getServicos().add(os2);

        t3.getServicos().add(os3);
        c3.getServicos().add(os3);

        tecnicoRepository.saveAll(Arrays.asList(t1, t2, t3, t4, t5, t6));
        clienteRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5, c6));
        ordemServicoRepository.saveAll(Arrays.asList(os1, os2, os3));
    }
}
