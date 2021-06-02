package com.ossystem.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ossystem.model.enums.Prioridade;
import com.ossystem.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Lock;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@NoArgsConstructor
@Entity
public class OrdemServico {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @CreationTimestamp
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataAbertura;
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataFechamento;
    private String observacao;
    @Enumerated(EnumType.STRING)
    private Prioridade prioridade;
    @Enumerated(EnumType.STRING)
    private Status status;
    @ManyToOne
    @JoinColumn(name = "tecnico_id")
    private Tecnico tecnico;
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    public OrdemServico(Long id, String observacao, Tecnico tecnico, Cliente cliente) {
        this.id = id;
        this.observacao = observacao;
        this.prioridade = Prioridade.BAIXA;
        this.status = Status.ABERTO;
        this.tecnico = tecnico;
        this.cliente = cliente;
    }
}
