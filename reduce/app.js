// const numeros = [5, 9, 20, 4, 2, 53];

// const sumarNumeros = arr => {
//   const result = arr.reduce((count, actual) => count + actual, 0)
//   console.log(result)
// }
// const sumarNumeros = arr => {
//   const count = 0  // 5, 14,34 , 38, 40, 93
//   for(let i = 0; i < arr.length; i++){
//     count = count + arr[i];
//   }
//   console.log(count)
// }

// sumarNumeros(numeros)

// const letras = ['H', 'O', 'L', 'A', ' ', 'C', 'H', 'I','C', 'A', 'S'];

// const palabra = letras.reduce((str, letra) => str + letra, '')
// console.log(palabra);

// let str = ''; // HOLA CHICAS
// for(let i = 0; i < letras.length; i++){
//   str = str + letras[i]
// }

// console.log(str)

// const operaciones = [
//   {
//     descripcion: 'Desayuno',
//     monto: 10,
//     categoria: 'comida',
//     tipo: 'gasto'
//   },
//   {
//     descripcion: 'cena',
//     monto: 90,
//     categoria: 'comida',
//     tipo: 'gasto'
//   },
//   {
//     descripcion: 'clases',
//     monto: 100,
//     categoria: 'trabajo',
//     tipo: 'ganancia'
//   },
//   {
//     descripcion: 'gasolina',
//     monto: 30,
//     categoria: 'transporte',
//     tipo: 'gasto'
//   },
//   {
//     descripcion: 'cine',
//     monto: 55,
//     categoria: 'transporte',
//     tipo: 'gasto'
//   },
//   {
//     descripcion: 'sueldo',
//     monto: 1000,
//     categoria: 'transporte',
//     tipo: 'ganancia'
//   },
// ]

// const divOperaciones = document.getElementById('root');

// const printData = arr => {
//   let str = '';
//   for(let i = 0; i < arr.length; i++){
//     const operacion = arr[i];
//     str += `
//     <div id="div-operaciones">
//       <p>descripción: ${operacion.descripcion}</p>
//       <p>monto: ${operacion.monto}</p>
//       <p>categoría: ${operacion.categoria}</p>
//       <p>tipo: ${operacion.tipo}</p>
//     </div>
//     `
//   }
//   divOperaciones.innerHTML = str;
// }

// str = '<div id="div-operaciones">
        // <p>descripción: gasolina</p>
        // <p>monto: 1000</p>
        // <p>categoría: transporte}</p>
        // <p>tipo: ganancia</p>
      // </div> 
    //   <div id="div-operaciones">
    //   <p>descripción: ${operacion.descripcion}</p>
    //   <p>monto: ${operacion.monto}</p>
    //   <p>categoría: ${operacion.categoria}</p>
    //   <p>tipo: ${operacion.tipo}</p>
    // </div> ';

// operacion =  {
//   descripcion: 'gasolina',
//   monto: 1000,
//   categoria: 'transporte',
//   tipo: 'ganancia'
// },

// const printData = arr => {
//   const strCompleto = arr.reduce((str, operacion) => 
//   str + `
//       <div class ="div-operaciones">
//         <p>descripción: ${operacion.descripcion}</p>
//         <p>monto: ${operacion.monto}</p>
//         <p>categoría: ${operacion.categoria}</p>
//         <p>tipo: ${operacion.tipo}</p>
//       </div>`
//        , '')
//       //  console.log(strCompleto)
//   divOperaciones.innerHTML = strCompleto
// }

// printData(operaciones)


// const sumaOperaciones = arr => {
  // let count = 0;
  // arr.forEach(operacion => count = count + operacion.monto)
  // console.log(count)
//   const result = arr.reduce((prev, current) => prev + current.monto, 0)
//   return result
// }

// const totalGastos = arr => 
//   arr.filter(operacion => operacion.tipo === 'gasto').reduce((prev, current) => 
//     prev + current.monto ,0)

// const totalGanancia = arr => 
//   arr.filter(operacion => operacion.tipo === 'ganancia').reduce((prev, current) => 
//     prev + current.monto ,0)
  
// console.log('Este es el total de ganancias:', totalGanancia(operaciones))
// console.log('Este es el total de gastos:', totalGastos(operaciones))
// console.log('Este es el balance:', totalGanancia(operaciones) - totalGastos(operaciones))




// const totalGastos = arr => {
//   const operacionesGastos = [];
//   let count = 0;
//   for(let i = 0; i< arr.length; i++){
//     const operacion = arr[i];
//     if(operacion.tipo === 'gasto'){
//       operacionesGastos.push(operacion)
//     }
//   }
//   for(let i = 0; i < operacionesGastos.length; i++){
//     const monto = operacionesGastos[i].monto;
//     // count = count + monto;
//     count += monto;
//   }
//   return count;
// }

// totalGastos(operaciones)

// sumaOperaciones(operaciones)

// El total de todas las operaciones
// El total de gasto
// El total de ganacia
// El balance (totalGanancia - totalGasto)




            // Sort js


const operaciones = [
  {
    descripcion: 'Desayuno',
    monto: 10,
    categoria: 'comida',
    tipo: 'gasto'
  },
  {
    descripcion: 'cena',
    monto: 90,
    categoria: 'comida',
    tipo: 'gasto'
  },
  {
    descripcion: 'clases',
    monto: 100,
    categoria: 'trabajo',
    tipo: 'ganancia'
  },
  {
    descripcion: 'gasolina',
    monto: 30,
    categoria: 'transporte',
    tipo: 'gasto'
  },
  {
    descripcion: 'cine',
    monto: 55,
    categoria: 'transporte',
    tipo: 'gasto'
  },
  {
    descripcion: 'sueldo',
    monto: 1000,
    categoria: 'transporte',
    tipo: 'ganancia'
  },
]

console.log(operaciones.sort((a, b) => {
  // if(a.descripcion.toLowerCase() > b.descripcion.toLowerCase()){
  //   return -1
  // } 
  if(a.monto > b.monto){
    return -1
  } 
  // if(a.descripcion.toLowerCase() > b.descripcion.toLowerCase()){
  //   return -1
  // }
}))

// const palabras = ["xochimilco", "argentina", "perro", "gato", "lapiz", "goma", "tijeras", "papel"]

// const aZ = palabras.sort().reverse();

// console.log(palabras)
// console.log(aZ)

// const numeros = [5, 9, 20, 4, 2, 53, 3, 200, 12, 54];
// 5, 9, 4, 2, 20 

// numeros.sort((a, b) => a - b)

// console.log(numeros)



// console.log(numeros.sort())
