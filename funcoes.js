// let x = '';
// console.log(x);
// x = 'oi';

// DECLARAÇÃO DE FUNÇÃO

// 1) Declara a função
                     //string ou valor
function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executa a função (1 ou + vezes) 

// imprimeTexto("oi");
// imprimeTexto('Outro texto impresso');

// três formas de escrever funções

function soma() {
    // outros codigos;
    // vários console.log();
    // return -> retorna/manda o valor da soma 2 + 2, que seria "4", pra fora desse codigo/bloco.
    return 2 + 2;   
}

// console.log(soma());

// função dentro de outra função

imprimeTexto(soma()); // 4.
// seria equivalente a:
// -> console.log(4);
// console.log -> imprimeTexto
// (4), valor que retorna da soma '2 + 2'.