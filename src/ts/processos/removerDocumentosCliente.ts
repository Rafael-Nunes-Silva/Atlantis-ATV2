import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../modelos/cliente";
import RemoveRg from "./removeRg";

export default class RemoverDocumentosCliente extends Processo {
    private cliente: Cliente;
    
    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.menu = new MenuTipoDocumento();
        this.execucao = true;
    }

    processar(): void {
        console.log("Inciando a remoção de documentos...");
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero("Qual opção desejada?");
            switch (this.opcao) {
                case 1:
                    this.processo = new RemoveRg(this.cliente);
                    this.processo.processar();
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log("Opção não entendida :(");
            }
        }
    }
}