export type Clinica = {
    id: number
    nome: string
    cnpj: string
    especialidade: string
    telefone: string
    endereço: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    status: string
    preço: number
    atendimento:{
        inicio: string
        fim: string
    }
}