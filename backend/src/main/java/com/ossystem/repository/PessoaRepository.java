package com.ossystem.repository;

import com.ossystem.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    @Query("select t from Pessoa t where t.cpf = :cpf")
    Pessoa findByCpf(@Param("cpf") String cpf);
}
