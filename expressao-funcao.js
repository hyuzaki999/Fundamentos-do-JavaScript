// Declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao('param');


// Expressão de função

const soma = function(num1, num2) {
    return num1 + num2};
console.log(soma(1, 1));


// Diferença principal ???????????????????????????????

// -> Funções e var são "listadas" no topo do arquivo (Hoisting).

console.log(apresentar());

function apresentar() {
    return "Olá!";
}

console.log(soma(1, 1));
// const soma = function(num1, num2) {
//     return num1 + num2};



// Lembrando que é necessário que o programa passe pela variável antes de podermos chamá-la, já que não há suporte à hoisting.
// Hoisting: o JavaScript analisa todo o código procurando por variáveis declaradas com var e funções para trazer tais declarações para o início do código.