import promptSync from "prompt-sync";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        const prompt = promptSync();
        const valor = prompt(`${mensagem} `);
        const numero = new Number(valor);
        return numero.valueOf();
    }

    public receberTexto(mensagem: string): string {
        const prompt = promptSync();
        const texto = prompt(`${mensagem} `);
        return texto;
    }

    public receberData(mensagem: string): Date {
        const prompt = promptSync();
        const texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `);
        const partes = texto.split("/");
        const ano = new Number(partes[2]);
        const mes = new Number(partes[1]);
        const dia = new Number(partes[0]);
        const data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf());
        return data;
    }

    public receberBool(mensagem: string, sim: string, nao: string): boolean {
        const prompt = promptSync();
        const texto = prompt(`${mensagem} (${sim}/${nao}): `).toUpperCase();
        return texto == sim.toUpperCase();
    }

    public receberCliente(mensagem: string): Cliente {
        const prompt = promptSync();
        const nome = prompt(`${mensagem} `);
        const cliente = Armazem.InstanciaUnica.Clientes.filter(
            (cliente) => cliente.Nome == nome
        )[0];
        return cliente;
    }
}