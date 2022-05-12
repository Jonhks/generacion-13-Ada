// // function declarada
// function suma(){
//     return 3 + 3;
// }
// // console.log(suma());

// // function expresadas
// const sumaExpresada = function(){
//     return 4 + 4;
// }
// console.log(sumaExpresada());
// // const resultadoDeSumaExpresada = sumaExpresada();
// // document.write(resultadoDeSumaExpresada)
// // console.log(sumaExpresada());

// // Function Flecha o arrowFunction
// // const num1 = "Este es otro numero fuera del scope";

// // Estoy declarando mi funcion
// // const sumaFlecha = () => {
// //     const num1 = 5;
// //     const num2 = 5;
// //     const resultado = num1 + num2;
// //     console.log(num1);
// //     return resultado;
// // };

// // acá inicializo mi función
// // console.log(sumaFlecha());

// // sumaExpresada();
// // console.log();
// // document.write();

// // array.map(() =>{})
// // array.map(function(){})

// // setTimeout(() =>{
// //     console.log('Se ejecuta despues de dos seg')
// // }, 2000)

// // console.log('Se ejecuta primero')

// // retorno implicito
// // const sumaFlecha = () => 5 + 5;

// // document.write(sumaFlecha());

// // clear()

// // scope






// // Duracion de vuelo

// // const destino1 = prompt('Cual es tu primer destino?');
// // const tiempo1 = Number(prompt('Cuanto tiempo te toma la primer escala?'))
// // const destino2 = prompt('Cual es tu segundo destino?');
// // const tiempo2 = Number(prompt('Cuanto tiempo te toma la segunda escala?'))
// // const destino3 = prompt('Cual es tu tercero destino?');
// // const tiempo3 = Number(prompt('Cuanto tiempo te toma la tercer escala?'))


// // const duracionTotalDelVuelo = tiempo1 + tiempo2 + tiempo3;

// // const mensaje = `Las escalas que harás son: 
// //     ${destino1}
// //     ${destino2}
// //     ${destino3}
// //     El tiempo total del vuelo será de: ${duracionTotalDelVuelo} hrs
// // `

// // alert(mensaje)



// // Duración vuelo

// // Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

// // 1.- Preguntar al usuario 3 escalas x
// // 2.- Preguntar al usuario el tiempo de cada escala x
// // 3.- Mostrar al usuario msj con las escalas y la duración de cada una
//     // 3.1.- mostrar  la duración total del vuelo


// const destino1 = prompt('Cual es tu primer destino?');
// const escala1 = Number(prompt('Cuanto tiempo se tarda la escala uno?'));
// const destino2 = prompt('Cual es tu segundo destino?');
// const escala2 = Number(prompt('Cuanto tiempo se tarda la escala dos?'));
// const destino3 = prompt('Cual es tu tercero destino?');
// const escala3 = Number(prompt('Cuanto tiempo se tarda la escala tres?'));


// const horasTotales = escala1 + escala2 + escala3;


// const mensaje = `Tienes 3 escalas programadas:

//     primer escala: ${destino1} y su duración es de: ${escala1} hrs
//     segunda escala: ${destino2} y su duración es de: ${escala2} hrs
//     tercer escala: ${destino3} y su duración es de: ${escala3} hrs

//     El tiempo total de tu vuelo será de: ${horasTotales} hrs
// `

// alert(mensaje);

// const userEstudent = confirm('Eres studiante?');

// userEstudent == true ? alert('Pasa a la clase') : alert('Entra al meet de admin');


// const num1 = Number(prompt('Dame el primer numero'));
// const num2 = Number(prompt('Dame el segundo numero'));
// let num3 = 0;

// parametros
// const suma = (num1, num2) => {
//    const resultado = num1 + num2;
//     num3 = prompt('Dame el numero a restar');
//     return resultado;
// };

// let resultadoSuma = suma(num1, num2); // 8 + 8 = 16
//                 //   16    ,   3
// const restando = (resultadoSuma, number) => {
//     return resultadoSuma - number  //16 - 3  = 13
// }
// console.log( 'Este es el resultado de la suma', resultadoSuma) //16

// console.log( 'Este es el resultado de la resta' ,restando(resultadoSuma, num3)) //13






// // let segundos = prompt('Ingrese la cantidad de segundos');
// const segundos = 3602;
const segundos = 3602; // Tomamos los segundos que nos dan de ejemplo
const hor =parseInt( segundos / 60 / 60) // Para las horas dividimos esos segundos entre 60 min y lo dividimos de nuevo / 60 por cada minuto. Seria lo mismo que dividirlo por 3600 
const min = parseInt(segundos / 60 % 60) // Para los minutos dividimos 3602 / 60 que nos dan 60.03333333 a eso le sacamos el resto de dividirlo por 60 que nos da 0.333333333 con el parseInt lo volvemos a un entero, nos da 0
const seg = parseInt(segundos % 60) // sacamos el modulo de dividir 3602 / 60 osea  (60 *  06 = 3600 y nos sobran 2)   
console.log(`Los ${segundos} segundos ingresados corresponden a ${hor} horas, ${min} minutos y ${seg} segundos.`)

// const segundosRestantes = segundos % 60;
// const minutos = (segundos / 60 % 60)
// const horas = 
//  let segAMin = parseInt(segundos  60); //minutos
//  let seg = (segundos%60);
//  let minAHoras = parseInt(segAMin %60);//horas
//  let min = (segAMin%60)

console.log(segundos % 60)



//  console.log(suma(num1, num2))


//  console.log(suma(6, 4))
//  console.log(suma(2, 1))
//  console.log(suma(7, 0))

// argumentos
// console.log(suma(5, 3));
// console.log(suma(5, 8));
