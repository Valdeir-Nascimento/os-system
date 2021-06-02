package com.ossystem.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
public class Tecnico extends Pessoa {

    @OneToMany(mappedBy = "tecnico")
    private List<OrdemServico> servicos = new ArrayList<>();

    public Tecnico() {
        super();
    }

    public Tecnico(Long id, String nome, String cpf, String telefone) {
        super(id, nome, cpf, telefone);
    }



}
