// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2))

// console.log(arr1)
// console.log(...arr1)

// const arregloCompleto = [...arr1, ...arr2]

// console.log(arregloCompleto)

// const arr1 = [1, 2, 3];

// const suma = (num1, num2, num3) => {
  //   const result = num1 + num2 + num3;
  //   console.log(result);
  //   return result;
  // }
  
  // 1    ,  2      ,  3
  // suma(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]);
  
  
// const arr = [1, 2, 3, 8, 6, 4];
// const arr2 = [4];


// const suma = (1, 2, 3, 8, 6, 4, 4, 9, 7, 5 , 3, 5, 1, 2, 3, 8, 6, 4) => {
  // [1, 2, 3, 8, 6, 4, 4, 9, 7, 5 , 3, 5,1, 2, 3, 8, 6, 4]
// const suma = (...numeros) => { // rest
//   console.log(numeros)
//   let count = 0;
//   for(let i = 0; i < numeros.length; i++){
//     count = count + numeros[i]
//   }
//   // console.log(count)
// }

  // console.log(...arr)
// suma(1, 2, 3, 8, 6, 4, 4, 9, 7, 5 , 3, 5, 1, 2, 3, 8, 6, 4)
// suma(...arr, ...arr2, 9, 7, 5 , 3, 5, ...arr) // spread operator

// const cart = []; // detalle(PLP), minicart, cart


// const arr = [1, 2, 3];

// const copiaArr = [...arr];
// copiaArr.push(4)

// console.log(arr, 'Original');
// console.log(copiaArr, 'Copia');

// const selectCategoria = document.getElementById('select-categoria')


// const operaciones = [
//   {
//     descripcion: 'Desayuno',
//     monto: 10,
//     categoria: 'comida'
//   },
//   {
//     descripcion: 'cena',
//     monto: 10,
//     categoria: 'comida'
//   },
//   {
//     descripcion: 'sueldo',
//     monto: 100,
//     categoria: 'trabajo'
//   },
//   {
//     descripcion: 'gasolina',
//     monto: 20,
//     categoria: 'transporte'
//   },
// ]

// selectCategoria.addEventListener('change', e => {
//   const copiaOperaciones = [...operaciones];
//   const categoriaComida = [];
//   const [copia] = copiaOperaciones
  
//   for(let i = 0; i < copiaOperaciones.length; i++){
//     if(copia.categoria === selectCategoria.value){
//       categoriaComida.push(copia)
//     }
//   }
//   console.log(categoriaComida)
// })



// Spread en objetos

// const persona = {
//   nombre: 'Nombre por defecto',
//   edad: 0
// };

// const jonh = Object.assign({}, persona);

// const jonh = {
//   ...persona,
//   nombre: 'Pepe',
//   edad: 65,
//   direccion: undefined,
// };

// jonh.nombre = 'Jonh';
// jonh.direccion = 'Calle uno y avenida dos'

// console.log(persona, 'persona')
// console.log(jonh, 'jonh')


// const estudiantes = ['Sofi', 'Juli', 'Lore', 'Vero'];

// const valor1 = estudiantes[0];
// const valor2 = estudiantes[1];
// const valor3 = estudiantes[2];
// const valor4 = estudiantes[3];

// const [valor1,valor2 ,valor3, valor4] = estudiantes;

// const [cero, uno, dos, tres] = estudiantes;

// console.log(valor1);
// console.log(valor2);
// console.log(valor3);
// console.log(valor4);


const operaciones =[
  {
    id: 1,
    monto: 100,
    categoria: 'comida',
    fecha: '18/07/2022',
    descripcion: 'Desayuno',
  },
  {
    id: 2,
    monto: 10,
    categoria: 'comida',
    fecha: '18/07/2022',
    descripcion: 'cena',
  },
  {
    id: 3,
    monto: 60,
    categoria: 'transporte',
    fecha: '18/07/2022',
    descripcion: 'gasolina',
  },
]  

const root = document.getElementById('root')
let str = '';

for (let i = 0; i < operaciones.length; i++) {
  const obj = operaciones[i];
  const {descripcion, monto, fecha, categoria} = obj;
   str = str +  `
   <div>
    <p>descripcion: ${descripcion}</p>
    <p>monto: $${monto}</p>
    <p>fecha: ${fecha}</p>
    <p>categoria: ${categoria}</p>
  </div>
    <br>
    <br>
    <br>
  `
}

root.innerHTML = str;