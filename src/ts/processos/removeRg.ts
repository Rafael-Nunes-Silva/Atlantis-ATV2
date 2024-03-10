import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";

export default class RemoveRg extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        const numero = this.entrada.receberTexto("Qual o número do documento?");
        const dataExpedicao = this.entrada.receberData("Qual a data de expedição do documento?");

        this.cliente.Documentos.filter(
            (documento) => {
                return documento.Tipo != TipoDocumento.RG &&
                    documento.Numero != numero &&
                    documento.DataExpedicao != dataExpedicao;
            }
        );
    }
}