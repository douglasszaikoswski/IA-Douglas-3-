const nomes = [
    "Carlos", "Fernanda", "Júlio", "Ana", "Bruno", "Mariana", "Paula", "Roberto"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
