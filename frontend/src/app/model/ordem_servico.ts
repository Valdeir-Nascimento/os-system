import { Cliente } from "./cliente";
import { Tecnico } from "./tecnico";

export interface OrdemServico {
    id?: any; 
    dataAbertura?: any;
    dataFechamento?: any;
    prioridade: String;
    observacao: String;
    status: any;
    tecnico: Tecnico;
    cliente: Cliente;
}