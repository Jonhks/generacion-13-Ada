
// const personas = [
//   {
//     nombre: 'Jonh',
//     edad: 35,
//     estudiante: false,
//     direccion: undefined,
//     peliculas: ["Rocky", "Sr anillos", "Volver al futuro"],
//     mascota: {
//       nombre: 'Logan',
//       raza: 'Dogo Arg',
//       edad: 4,
//       color: 'blanco'
//     }
//   },
//   {
//     nombre: 'Angelica',
//     edad: 25,
//     estudiante: true,
//     direccion: undefined,
//     peliculas: ["Matrix", "Harry Potter"],
//     mascota: {
//       nombre: '',
//       raza: '',
//       edad: 0,
//       color: ''
//     }
//   },
//   {
//     nombre: 'Vero',
//     edad: 24,
//     estudiante: true,
//     direccion: 'calle uno y avenida dos',
//     peliculas: [],
//     mascota: {
//       nombre: 'Firulais',
//       raza: 'Poodle',
//       edad: 2,
//       color: 'negro'
//     }
//   },
//   {
//     nombre: 'Belen',
//     edad: 35,
//     estudiante: false,
//     direccion: undefined,
//     peliculas: ["Rocky", "Sr anillos", "Volver al futuro"],
//     mascota: {
//       nombre: 'Logan',
//       raza: 'Dogo Arg',
//       edad: 4,
//       color: 'blanco'
//     }
//   },
//   {
//     nombre: 'Naybet',
//     edad: 25,
//     estudiante: true,
//     direccion: undefined,
//     peliculas: ["Matrix", "Harry Potter"],
//     mascota: {
//       nombre: '',
//       raza: '',
//       edad: 0,
//       color: ''
//     }
//   },
//   {
//     nombre: 'Maria',
//     edad: 24,
//     estudiante: true,
//     direccion: 'calle uno y avenida dos',
//     peliculas: [],
//     mascota: {
//       nombre: 'Firulais',
//       raza: 'Poodle',
//       edad: 2,
//       color: 'negro'
//     }
//   },
// ];


// localStorage.setItem('arrPersonas', JSON.stringify(personas))

// const arrPersonas = JSON.parse(localStorage.getItem('arrPersonas'))

// console.log(arrPersonas)

// const flore = {
//   nombre: 'Flore',
//   apellido: 'Estrada',
//   edad: 25,
//   promedio: 9.9,
//   estudiante: true,
// }

// localStorage.setItem('objetoFlore', JSON.stringify(flore))

// const objetoFlore = localStorage.getItem('objetoFlore')
// console.log(JSON.parse(objetoFlore))

// localStorage.setItem('nombreFlore', 'Flore')

// const nombreFlore = localStorage.getItem('nombreFlore')

// para eliminar un dato del localstorage

// localStorage.removeItem('apellidoFlore');

// para eliminar todo el localstorage
// localStorage.clear();

// console.log(nombreFlore)

// JSON.stringify(personas)

// console.log(personas)


// for(let i = 0; i < arrPersonas.length; i++){
//   const obj = arrPersonas[i]
//   console.log(obj.mascota.nombre)
  // console.log(obj.peliculas[0])
  // console.log(personas[i].nombre)
  // console.log(personas['nombre'])
  // console.log(personas[nombre])
  // console.log(personas[i]['nombre'])
  // console.log(obj.nombre)
  // console.log(obj['nombre'])
// }

// for recorre arreglos y strings

// forin recorre objetos





// console.log(personas)


// for (const key in jonh) {
//   if (Object.hasOwnProperty.call(jonh, key)) {
//     // const element = jonh[key];
//     console.log(key)
//     console.log(jonh[key])
//   }
// }

// console.log(jonh['edad'])

// jonh.altura = 1.86;
// jonh.nombre = 'Pepe'
// delete jonh.mascota


const anio = new Date().getFullYear()
const mes = new Date().getMonth()
const dia = new Date().getDate()

const fecha = `${dia}/${mes + 1}/${anio}`

console.log(fecha)