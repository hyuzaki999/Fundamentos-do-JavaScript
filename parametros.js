// parãmetros de função

            // 1    //2
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(20, 40));
console.log(soma(420, -500));
console.log(soma(1720, 1945));

// Parâmetros x argumentos

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   console.log(operacaoMatematica(15, 30, 45)) // 90
// Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).


// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}.`
}
console.log(nomeIdade('Marcos', 16))
console.log(nomeIdade(16, 'Marcos'))

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}

                            //5         //9
console.log(multiplica(soma(2, 3), soma(4,5)))
console.log(multiplica(soma(2, 3)));