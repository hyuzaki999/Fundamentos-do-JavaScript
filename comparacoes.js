// = -> atribuição de valor ("é igual a")

// == -> parcialmente iguais (comparação implicita)
const numero = 5;
const texto = '5'; // o js converteu a string (tipo string) para o tipo number e verificou se são parcialmente iguais

//console.log(numero == texto);




// === -> totalmente/estritamente iguais (comparação explicita)

//console.log(numero === texto); // deu false. Não são totalmente iguais, pois um é tipo string e outro é tipo number.




//typeof
console.log(typeof numero);
console.log(typeof texto);


//Portanto, podemos dizer que
// == -> compara o valor
// === -> compara o valor e o tipo de dado


// Conversão explicita
Number();
String();