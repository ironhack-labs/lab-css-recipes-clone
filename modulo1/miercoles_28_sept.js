// Comentarios en una línea
/* 
Comentarios en múltiples líneas
*/
// Variables 
/*
const -> sólo lectura, no se puede cambiar el tipo una vez declarado, 

se debe asignar un valor al momento de declararla
let -> se pueden editar y reasignar  

var -> se pueden editar y reasignar , se puede volver a reasignar
*/

// Palabras reservadas delete const let var function 

// Cómo declarar variables 
let a; // no se recomienda nombrarlas con una sola letra 
let color; 
let $Nova; // Acepta ciertos símbolos para los nombres de las variables 
let demo01; // Acepta números para los nombres de las variables
let tomar_agua; // Snake Case
let quieroComer; // Cammel Case
let π; // Símbolos solos
let _perro; // Inicializado con guión bajo 
// No se pueden declarar variables que empiezen con un número o que contengan guión medio 
// Declarar 5 variables 
let teléfono; 
let cartera; 
let tomandoClase; 
let actividades_por_realizar;
let tarjetaDeDebito; 

// Cambiar los valores
let perro; 

console.log('cual es el valor', perro)
// Símbolo para cambiar el valor de las variables 
// Primero descripción del símbolo igual 
/*
= asignar un nuevo valor 
== Comapramos el cntenido de las variables 1 == '1' -> True 
=== Comparar el valor y el tipo de dato 1 === 1 -> True 1 === '1' -> False
*/
perro = 'sandy'; // Asignando un nuevo valor a la variable perro 
console.log('Segundo valor', perro);

perro = 'Octavio'; 
console.log('Último nombre de perro ', perro);

// Se puede cambiar el valor de una const ??? 
const cat = true; 
console.log('Que es mi const1', cat);
//cat = 'Bola de nieve'; 
//console.log('El nuevo valor de const', cat);

// Tipos de dato
// typeof
console.log('Que tipo de dato es perro ', typeof perro );

// Operadores
console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

const expressionOne = ((2 * 2) + 5) * 6;
console.log(expressionOne);
const expressionTwo = ((2* 2) + (5 * 3)) - 5;
console.log(expressionTwo);
const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree);
const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionFour);

console.log(`Probando la función de backticks ${perro}`);

// longitud de una cadena o arrelgo, sólo aplica estos dos
console.log(`Cuanto mide la variable perro? `, perro.length);

// Accessing characters 
// Comando para ver la posición exacta chatAt(n)
console.log(`Posición exacta del caracter 5 en la varaible perro `, perro.charAt(5));
// Otra manera de acceder a uno de los caracteres 
console.log(`Posición exacta del caracter 5 en la varaible perro `, perro[5]);
// Como sacar el indice de una variable 
console.log(perro.indexOf('o',3));

let texto = 'My favorite dessert is jello'
console.log(texto.indexOf('j'));
console.log('$'.repeat(3));

// Para traer substrings la diferencia entre substring subtr y slice es que uno funciona con los índices negativos 
