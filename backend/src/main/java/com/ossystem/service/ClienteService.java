package com.ossystem.service;

import com.ossystem.model.Cliente;
import com.ossystem.model.Pessoa;
import com.ossystem.repository.ClienteRepository;
import com.ossystem.repository.PessoaRepository;
import com.ossystem.service.exceptions.DataIntegratyViolationException;
import com.ossystem.service.exceptions.ObjectNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    private final String CPF_CADASTRADO = "CPF já cadastrado na base de dados!";

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private PessoaRepository pessoaRepository;

    public Cliente findById(Long idCliente) {
        var cliente = clienteRepository.findById(idCliente);
        return cliente.orElseThrow(() -> new ObjectNotFoundException("Cliente não encontrado! Id: " +
                idCliente + ", Tipo: " + Cliente.class.getName()));
    }

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Cliente salvar(Cliente cliente) {
        if (findByCpf(cliente) != null) {
            throw new DataIntegratyViolationException(CPF_CADASTRADO);
        }
        return clienteRepository.save(cliente);
    }

    public Cliente update(Long idCliente, Cliente cliente) {
        Cliente clienteAtual = findById(idCliente);
        if (findByCpf(clienteAtual) != null && findByCpf(clienteAtual).getId() != idCliente) {
            throw new DataIntegratyViolationException(CPF_CADASTRADO);
        }
        BeanUtils.copyProperties(cliente, clienteAtual, "id"); //Setando os campos
        return clienteRepository.save(clienteAtual);

    }

    public void delete(Long idCliente) {
        Cliente cliente = findById(idCliente);
        if (cliente.getServicos().size() > 0) {
            throw new DataIntegratyViolationException("Cliente possui ordens de serviço, não pode ser removido!");
        }
        clienteRepository.deleteById(idCliente);
    }

    private Pessoa findByCpf(Cliente cliente) {
        Pessoa pessoa = pessoaRepository.findByCpf(cliente.getCpf());
        if (pessoa != null) {
            return pessoa;
        }
        return null;
    }


}
