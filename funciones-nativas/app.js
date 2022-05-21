// >, <, >=, <=, ==, ===, !=, !==

// un igual  para asignación
// const nombre = 'Jonh';

// dos iguale es para comparar el valor
// console.log(2 == '2'); //true


// tres iguales compara valor y tipo de dato
// console.log(2 === '2'); // false

// un ! y un = comparamos que sean diferentes
// console.log(2 != '2'); // false

// un ! y dos = comparamos que ean exactamente diferentes
// console.log(2 !== '2'); // true

// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario

// const edad = Number(prompt('¿Cúal es tu edad?'));

// const esMayorDeEdad = (edad) =>{
//     return edad >= 18;
// };

// console.log(esMayorDeEdad(edad));

// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40

// 1.- crear función
// 2.- Funcion tome los tres valores facil, normal y dificil;
// 3.- devolver el puntaje total


// const calcularPuntaje = (facil, normal, dificil) => {
//     const resultadoFacil = facil * 3;
//     const resultadoNormal = normal * 5;
//     const resultadoDificil = dificil * 10;
//     const resultadoTotal = resultadoFacil + resultadoNormal + resultadoDificil;
//     return resultadoTotal;
// };

// console.log(calcularPuntaje(3, 0, 0)) // 9
// console.log(calcularPuntaje(0, 2, 1)) // 20
// console.log(calcularPuntaje(5, 1, 2)) // 40


// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// const esPar = (number) => {
//     return number % 2 === 0;
// }
// const esImpar = number => number % 2 !== 0;

// esPar(2) // false
// esPar(3) // true

// console.log(esImpar(2)) // 2 / 2 % 0
// console.log(esImpar(3)) // 3 / 2 % 1

// visual       1,2,3
// logica       0,1,2

// aber la longitud de un string
// console.log(palabra.length)

// Pasa el texto a mayusculas
// console.log(palabra.toUpperCase());

// Pasa el texto a minusculas
// console.log(palabra.toLowerCase())

// Recorta un texto desde el primer indice hata el egundo indice
// console.log(palabra.slice(1, 4));

const palabra = "Perritos Bonitos en el parque México corriendo sueltos"; // 16
// const numeros = 1324546;
// const numeros = new String(123456);
// busca en caracter o una palabra dentro de un texto o cadena
// console.log(palabra.includes('México'));

// busca en el texto la primera posición logica de un caracter en una cadena
// console.log(palabra.indexOf('e'));
// busca en el texto la ultima posición logica de un caracter en una cadena
// console.log(palabra.lastIndexOf('e'));

// Este metodo necesita dos parametros el primero es la palabra a buscar y el segundo es la palabra qeu insertará en su lugar
// console.log(palabra.replace('México', 'Argentina'));

// Este metodo nos funciona para pasar un valor a tipo STRING
// console.log(numeros.toString());



// Metodos de numeros 

// Min
// Nos retorna el número menor de los que le pasemos 
// console.log(Math.min(7,23, 6, 8, 15, 9))
// Max
// Nos retorna el número mayor de los que le pasemos 
// console.log(Math.max(7, 23, 6, 8, 15, 9));

// Round
// Nos retorna el numero entero redondeado mas cercano al que le pasamos
// console.log(Math.round(2.5));

// ceil
// Nos retorna el numero entero redondeado mas cercano mayor al que le pasamos
// console.log(Math.ceil(2.00000000001));

// floor
// Nos retorna el numero entero redondeado mas menor cercano al que le pasamos
// console.log(Math.floor(2.999999999999));


// Random
// Este nos genera un número random entre el 0 y el número que le pidamos 
// console.log(Math.ceil(Math.random() * 1000));


// const numeroAleatorio = () => {
//     document.write(` El número ganador de la loteria es: ${Math.ceil(Math.random() * 10000)}`)
// }


// obtenerDuracionEnSegundos(duracion)
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración


// 10 * 60 
// 42

// 1.- Escribir la funcion
// 2.- Separar el string los primeros dos caracteres y guardarlos en una variable pasarlos a numero 
// 3.- Separar el string los ultimos dos caracteres y guardarlos en una variable pasarlo a numero
// 4.- Multiplicar los minutos * 60
// 5.- sumar ese resultado con lo segundos
// 6.- Retornar el total en segundos

// const obtenerDuracionEnSegundos = duracion => {
//     const minutos = Number(duracion.slice(0, 2)); // 10
//     const segundos = Number(duracion.slice(3, 5)); // 42
//     const minutosMultiplicados = minutos * 60; // 600
//     const segundosTotales = minutosMultiplicados + segundos; // 642
//     return segundosTotales
// };


// console.log(obtenerDuracionEnSegundos('00:33')) // 33
// console.log(obtenerDuracionEnSegundos('01:05')) // 65
// console.log(obtenerDuracionEnSegundos('10:42')) // 642

// const texto = 'IMSS'
// console.log(texto.splice('.'))

// convertirEnAcronimo(str)
// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto


const convertirEnAcronimo = str => {
    // console.log(str.toLocaleUpperCase().split('').join('.'))
    // console.log(str.toLocaleUpperCase().split('').join('.'))
    const primerLetra = str.toUpperCase().slice(0,1)
    const segundaLetra = str.toUpperCase().slice(1,2)
    const tercerLetra = str.toUpperCase().slice(2,3)
    const ultimaLetra = str.toUpperCase().slice(3,4)
    const msj = `${primerLetra}.${segundaLetra}.${tercerLetra}.${ultimaLetra}`
    return msj
}

console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'