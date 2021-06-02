package com.ossystem.service;

import com.ossystem.dto.request.TecnicoRequest;
import com.ossystem.model.Pessoa;
import com.ossystem.model.Tecnico;
import com.ossystem.repository.PessoaRepository;
import com.ossystem.repository.TecnicoRepository;
import com.ossystem.service.exceptions.DataIntegratyViolationException;
import com.ossystem.service.exceptions.ObjectNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TecnicoService {

    private final String CPF_CADASTRADO = "CPF já cadastrado na base de dados!";

    @Autowired
    private TecnicoRepository tecnicoRepository;
    @Autowired
    private PessoaRepository pessoaRepository;

    public Tecnico findById(Long idTecnico) {
        var tecnico = tecnicoRepository.findById(idTecnico);
        return tecnico.orElseThrow(() -> new ObjectNotFoundException("Técnico não encontrado! Id: " +
                idTecnico + ", Tipo: " + Tecnico.class.getName()));
    }

    public List<Tecnico> findAll() {
        return tecnicoRepository.findAll();
    }

    public Tecnico salvar(Tecnico tecnico) {
        if(findByCpf(tecnico) != null) {
            throw new DataIntegratyViolationException(CPF_CADASTRADO);
        }
        return tecnicoRepository.save(tecnico);
    }

    public Tecnico update(Long idTecnico, Tecnico tecnico) {
        Tecnico tecnicoAtual = findById(idTecnico);
        if(findByCpf(tecnico) != null && findByCpf(tecnico).getId() != idTecnico) {
            throw new DataIntegratyViolationException(CPF_CADASTRADO);
        }
        BeanUtils.copyProperties(tecnico, tecnicoAtual, "id"); //Setando os campos
        return tecnicoRepository.save(tecnicoAtual);

    }

    public void delete(Long idTecnico) {
        Tecnico tecnico = findById(idTecnico);
        if (tecnico.getServicos().size() > 0) {
            throw new DataIntegratyViolationException("Técnico possui ordens de serviço, não pode ser removido!");
        }
        tecnicoRepository.deleteById(idTecnico);
    }

    private Pessoa findByCpf(Tecnico tecnico) {
        Pessoa tecnicoSalvo = pessoaRepository.findByCpf(tecnico.getCpf());
        if (tecnicoSalvo != null) {
            return tecnicoSalvo;
        }
        return null;
    }

}
