export interface ReactiveFormModeloInterface {
    nome: string | null;
    contato: {
        telefone: string | null;
        email: string | null;
    } | null;
    endereco: {
        rua: string | null;
        numero: number | null;
        cidade: string | null;
    } | null;
}
