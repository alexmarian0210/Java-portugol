// funções JavaScript

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}
function adicao(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    if (n2 === 0) {
        return 'Erro: Divisão por zero';
    }
    return n1 / n2;
}

// Exemplo de uso
console.log("Média: " + calcularMedia(8, 6)); // Média: 7
console.log("Adição: " + adicao(5, 3)); // Adição: 8
console.log("Subtração: " + subtracao(10, 4)); // Subtração: 6
console.log("Multiplicação: " + multiplicacao(7, 3)); // Multiplicação: 21
console.log("Divisão: " + divisao(20, 4)); // Divisão: 5
console.log("Divisão por zero: " + divisao(10, 0)); // Divisão por zero: Erro: Divisão por zero