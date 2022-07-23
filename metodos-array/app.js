// const arreglo = [1 , 2, 3, 4, 'Hola', 'otro', true];

// ForEach recorrer un arreglo como lo hace un for normal y no retorna nada en especifico

// for(let i = 0; i < arreglo.length; i++){
//   console.log(arreglo[i])
// console.log(i)
// console.log(arreglo)
// }

// arreglo.foreach(function(){})
// arreglo.forEach((valor, posicion, arreglo)=>{
// console.log(arreglo)
// console.log(index)
// console.log(arreglo)
// })


// map este metodo retorna un nuevo arreglo con la condicion que nosotros le pongamos 



// const numeros = [9, 8, 7, 5, 2, 25, 4, 8]; // necesitamos un nuevo arreglos con los numeros multiplicados por 3;


// const multiplicados = numeros.map((numero, indice, arreglo)=> {
//   // console.log(numero)
//   // console.log(indice)
//   // console.log(arreglo)
//   return numero * 3
// })

// const multiplicados = numeros.map((numero) => numero * 3)

// console.log(multiplicados)


// let nuevoArreglo = [];

// for(let i = 0; i < numeros.length; i++){
// console.log(numeros[i])
// console.log(i)
// console.log(numeros)
// nuevoArreglo.push(numeros[i] * 3)
// }

//  numeros.forEach((numero) => {
//   return nuevoArreglo.push(numero * 3)
// })

// console.log(nuevoArreglo)


// const personas = [
//   {
//     nombre: 'Lore',
//     edad: 25
//   },
//   {
//     nombre: 'Dani',
//     edad: 18
//   },
//   {
//     nombre: 'Fran',
//     edad: 45
//   }, 
//   {
//     nombre: 'Moni',
//     edad: 31
//   }
// ]

// const arregloAniosNacimiento = personas.map(persona => {
//   const anioActual = new Date().getFullYear();
//   const edad = persona.edad
//   const anioNacimiento = anioActual - edad
//   return anioNacimiento
// })

// const arregloAniosNacimiento = personas.map(persona => new Date().getFullYear() - persona.edad)

// console.log(arregloAniosNacimiento)

// const arregloAniosNacimiento = [];

// for(let i = 0; i <  personas.length; i++){
//   const anioActual = new Date().getFullYear();
//   const edad = personas[i].edad;
//   const anioNacimiento = anioActual - edad
//   arregloAniosNacimiento.push(personas[i].anioNacimiento = anioNacimiento)
// }


// const numeros = [9, 8, 17, 5, 2, 25, 4, 18]; // crear un nuevo arreglo con los numeros mayores a 10


// const mayoresA10 = numeros.filter((numero, index, arreglo) => console.log(arreglo) )
// const mayoresA10 = numeros.filter(numero => numero > 10)

// console.log(mayoresA10)
// const mayoresA10 = [];

// for(let i = 0; i < numeros.length; i++){
//   if(numeros[i] > 10){
//     mayoresA10.push(numeros[i])
//   }
// }

// numeros.forEach(numero => {
//     if(numero > 10){
//     mayoresA10.push(numero)
//   }
// })

// const mayoresA10 = numeros.map(numero => {
//     if(numero < 10){
//       return 
//     } else {
//       return numero
//     }
// })


// const operaciones =[
//   {
//     id: 1,
//     monto: 100,
//     categoria: 'comida',
//     fecha: '18/07/2022',
//     descripcion: 'Desayuno',
//     acciones: ['editar', 'borrar']
//   },
//   {
//     id: 2,
//     monto: 10,
//     categoria: 'comida',
//     fecha: '18/07/2022',
//     descripcion: 'cena',
//     acciones: ['editar', 'borrar']
//   },
//   {
//     id: 3,
//     monto: 60,
//     categoria: 'transporte',
//     fecha: '18/07/2022',
//     descripcion: 'gasolina',
//     acciones: ['editar', 'borrar']
//   },
//   {
//     id: 4,
//     monto: 30,
//     categoria: 'sueldo',
//     fecha: '18/07/2022',
//     descripcion: 'pasaje',
//     acciones: ['editar', 'borrar']
//   },
// ]  


// const arrcategoria = [];

// for(let i = 0; i < operaciones.length; i++){
//   if(operaciones[i].categoria === 'transporte'){
//     arrcategoria.push(operaciones[i])
//   }
// }

// operaciones.forEach(operacion => {
//     if(operacion.categoria === 'comida'){
//     arrcategoria.push(operacion)
//   }
// })

// const arrcategoria = operaciones.filter((operacion, index, arr) => console.log(arr));
// const arrcategoria = operaciones.filter(operacion => operacion.categoria === 'salud');

// console.log(arrcategoria)



// Find devuelve el primer elemento de un arreglo que cumpla con una condicion

// const numeros = [5, 12, 8, 130, 44];


// const encontrada = numeros.find(numero => numero > 10);

// console.log(encontrada)

const operaciones = [{
    id: 1,
    monto: 100,
    categoria: 'comida',
    fecha: '18/07/2022',
    descripcion: 'Desayuno',
    acciones: ['editar', 'borrar']
  },
  {
    id: 2,
    monto: 10,
    categoria: 'comida',
    fecha: '18/07/2022',
    descripcion: 'cena',
    acciones: ['editar', 'borrar']
  },
  {
    id: 3,
    monto: 60,
    categoria: 'transporte',
    fecha: '18/07/2022',
    descripcion: 'gasolina',
    acciones: ['editar', 'borrar']
  },
  {
    id: 4,
    monto: 30,
    categoria: 'sueldo',
    fecha: '18/07/2022',
    descripcion: 'pasaje',
    acciones: ['editar', 'borrar']
  },
]


// const operacion = operaciones.find(operacion => operacion.categoria === 'comida');

// console.log(operacion)


// every  este metodo retorna un true si todos los elementos del arreglo cumplen una condicion


// const numeros = [1, 30, 39, 100, 13];

// const resultado = numeros.every(numero => numero < 40);
// const resultado = numeros.every((numero, index, arr) => console.log(arr));

// console.log(resultado)


// some este metodo comprueba si al menos un elemento del arreglo cumple una condicion

// const numeros = [1, 30, 39, 10, 13];

// const result = numeros.some(numero => numero > 70);

// console.log(result)


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numeros.reverse();

// console.log(result);


// Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo


// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez;

// codear acá la solución del ejercicio

// numerosMasDiez = numeros.map(numero => numero + 10)

// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]


// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado
// const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// codear acá la solución del ejercicio

// const losMasCaros = costos.filter(costo => costo > 50);


// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]


// const invertirCaso = (string) => {
//   let stringInvertido = []
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toLowerCase()) {
//       stringInvertido.push(string[i].toUpperCase())
//     } else if (string[i] === string[i].toUpperCase()) {
//       stringInvertido.push(string[i].toLowerCase());
//     }
//   }
//   return stringInvertido.join('')
// }

const invertirCaso = str => {
  let text = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      text += str[i].toUpperCase()
    } else if(str[i] === str[i].toUpperCase()){
      text = text + str[i].toLowerCase()
    }
  }
  return text;
}
// let text = 'aD';

// text += // text = text + str[i]

console.log(invertirCaso('Ada Lovelace')) //'aDA lOVELACE')
console.log(invertirCaso('feliz cumple'))//'FELIZ CUMPLE')
console.log(invertirCaso('jAvAsCrIpT'))// 'JaVaScRiPt')



