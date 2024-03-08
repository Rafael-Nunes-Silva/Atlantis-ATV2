import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;
    private titularNome: String;

    constructor() {
        super();

        this.titularNome = this.entrada.receberTexto("Qual o nome do titular?");
        this.clientes = Armazem.InstanciaUnica.Clientes.filter(
            (cliente) => cliente.Titular && cliente.Titular.Nome == this.titularNome
        );
    }

    processar(): void {
        console.clear();
        console.log(`Iniciando a listagem dos clientes dependentes do titular ${this.titularNome}...`);
        this.clientes.forEach(cliente => {
            this.impressor = new ImpressorCliente(cliente);
            console.log(this.impressor.imprimir());
        });
    }
}