// variables
// function
// parametros
// argunments
// DOM y eventos
// ejemplo de proyecto 

// Variables con tipos primitivos o sencillos
// const nombre = 'Jonh';
// const edad = 36; 
// const bolean = true; 
// const noHay = undefined;

// variables con tipos complejo
// const arreglo = [];
// const myFunc = () => {};

// funcion necesita dos cosas
// 1.- Declaración de la función

// const suma = (x, y) => {
//   const resultado = x + y
//   return resultado
// }

// 2.- Ejecuación de la función

// suma(2, 6); // 8
// suma(5, 2); // 7



// const btn = document.getElementById('btn');


// const myFunc = () => {
//   alert('desde la funcion declarada')
// }

// btn.addEventListener('click', myFunc);


// const input = document.getElementById('input');
// const parrafo = document.getElementById('parrafo');


// input.addEventListener('input', (event) => {
//   const valorActual = event.target.value;
  // parrafo.innerHTML = `<span> ${valorActual} </span>`;
  // parrafo.innerText = `<span> ${valorActual} </span>`;
  // parrafo.textContent = valorActual;
// })


// const points = document.getElementById('points');
// const range = document.getElementById('range');
// const img = document.getElementById('img');


// points.addEventListener('input', (event) => {
//   const valorActual = event.target.value;
//   range.innerHTML = `El valor actual es: ${valorActual}%`
//   img.style.filter = `brightness(${valorActual}%)`
// })


const arregloNumeros = [11, 02, 13, 4, 5, 6, 7, 8, 9, 12, 45, 76, 234, 5];
let numerosMayores = [];
let numerosMenores = [];
const listaMenores = document.getElementById('lista-menores');
const listaMayores = document.getElementById('lista-mayores');


const separadoraDeNumeros = (arr) => {
  for(let i = 0; i < arr.length; i++){
    const valorActual = arr[i]
    if(valorActual < 10){
      numerosMenores.push(valorActual)
    } else {
      numerosMayores.push(valorActual)
    }
  } 
  pintarListas(numerosMenores, listaMenores)
  // pintarListas([2, 4, 5, 6, 7, 8, 9, 5], lista-menores)

  pintarListas(numerosMayores, listaMayores)
  // pintarListas([11, 13, 12, 45, 76, 234], lista-mayores)
  
}

const pintarListas = (arr, lista) => {
  let str = ''
  for(let i = 0; i < arr.length; i++){
    const valorActual = arr[i]
    str = str + `<li> ${valorActual} </li>`
  }
  lista.innerHTML = str
}

separadoraDeNumeros(arregloNumeros);