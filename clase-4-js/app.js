// const edad = prompt('Cual es tu edad?');

// const verificarEdad = (edad) => {
//     if(edad >= 18){
//         alert('Bienvenida a nuestro sitio de bebidas alcoholicas :)');
//     } else {
//         alert('No podemos venderte Bebida alcoholicas');
//     }
// }

// verificarEdad(edad);


// Operadores relacionale

// Con un = hacemos una asignación
// const nombre = 'Jonh';

// con dos iguales compara valores
// console.log(2 != '2');

// con tres iguales compara valor y tipo de dato
// console.log(2 === '2'); //false

// >, < >=, >==, <=, =>, == , ===, !=, !==

// console.log(Number('2') + 2);


// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// const edad = prompt('Cual es tu edad?');

// || or que se cumpla una u otra condicion para darnos true
// && and Se tienen que cumplir ambas condiciones para que me de true

// const puedeVerPelicula = (edad) => {
    // if(edad >= 15 && tieneAutorizacion === true){
    //     alert('puedes ver la pelicula')
    //     return true
    // } else {
    //     alert('No puedes verla!!!')
    //     return false
    // }
//     if(edad >= 15){
//         const tieneAutorizacion = confirm('Tienes el permiso de tus padres?');
//         if(tieneAutorizacion === true){
//             alert('puedes ver la pelicula')
//         return true
//         }
//     } else{
//         alert('No puedes verla!!!')
//         return false
//     }
// }

// puedeVerPelicula(12);
// console.log(puedeVerPelicula(edad)); // false
// console.log(puedeVerPelicula(12, true));  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true))  // true

// estaEnRango(valor, minimo, maximo)
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// const numero = prompt('Ingresa un número')
// const minimo = prompt('Ingresa el número minimo del rango')
// const maximo = prompt('Ingresa el número maxico del rango')

//                         // parametros
// const estaEnRango = (numero, minimo, maximo) => {
//     if(numero >= minimo && numero <= maximo){
//         return true
//     } else {
//         return false
//     }
// }
                        // argumentos
// console.log(estaEnRango(numero, minimo, maximo))  // true 3 >= 1 y 3 <= 10
// console.log(estaEnRango(1, 1, 10))  // true
// console.log(estaEnRango(10, 1, 10))  // true
// console.log(estaEnRango(12, 1, 10))  // false
// console.log(estaEnRango(-3, 1, 10))  // false


// esParOImpar(numero)
// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// const numero = prompt('Ingresa el numero a evaluar')

// const esParOImpar = numero => {
//     if(numero % 2 === 0){ // 40 / 2 = 20
//         return 'par'
//     } else {
//         return 'impar'
//     }
// }

// alert('El número ingresado es: '+ esParOImpar(numero)) // 'impar'
// alert(esParOImpar(10)) // 'par'


// entre las 7hrs y las 12 hrs = buenos días
// entre las 12:01 y 19 hrs = buenas tardes
// entre las 19 y las 00 hrs no diga = buenas noches
// entre las 00 y las 7 = Que haces despierta?

// const hr = prompt('Ingresa la hr! :)')

// const saludar = hr => {
//     if(hr >= 7 && hr < 12){
//         return 'Buenos días!'
//     } else if(hr >= 12 && hr < 19){
//         return 'Buenas tardes'
//     } else if(hr >= 19 && hr <= 24){
//         return 'Buenas noches'
//     } else if(hr >= 0 && hr < 7){
//         return 'Que haces despierta??'
//     }else{
//         return 'La hora que ingresaste no es valida!! ingresa una hr entre 0 y 24'
//     }
// }

// console.log(saludar(hr))


// obtenerGeneracion(anioNacimiento)
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// const anioNacimiento = prompt('Ingresa el año de tu nacimiento');


// const obtenerGeneracion = anioNacimiento => {
//     let mensaje = '';
//     if(anioNacimiento >= 1949 && anioNacimiento <= 1968){
//         mensaje = 'Baby boomer';
//     } else if(anioNacimiento >= 1969 && anioNacimiento <= 1980){
//         mensaje = 'Generación X'
//     } else if(anioNacimiento >= 1981 && anioNacimiento <= 1993){
//         mensaje = 'Millennials'
//     } else if(anioNacimiento >= 1994 && anioNacimiento <= 2010){
//         mensaje = 'Generación Z'
//     } else {
//         mensaje = 'Evaluamos solamente entre los años de 1949 y 2010'
//     }
//     return mensaje;
// }

// alert(obtenerGeneracion(anioNacimiento))

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010


// const edad = prompt('Cual es tu edad?');
// const permiso = confirm('Tienes permiso de tus padres?')

// Operador ternario

// const verificarEdad = (edad, permiso) => {
//     edad >= 18 && permiso === true  // if()
//         ? alert('Bienvenida a nuestro sitio de bebidas alcoholicas :)') // true
//         : alert('No podemos venderte Bebida alcoholicas'); // false
// }

// verificarEdad(edad, permiso);
