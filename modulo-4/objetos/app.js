
// const sofi = {
//   nombre: 'Sofia',
//   apellido: 'Ferrer',
//   edad: 32,
//   esEstudiante: false,
//   direccion: undefined
// };

// new Date();

// const lorena = new Object;
// lorena.nombre = 'Lorena';
// lorena.edad = 35;
// lorena.apellido = 'Apellido';
// lorena.esEstudiante = true;
// lorena.direccion = 'calle uno y avenida dos';

// console.log(lorena);

// const nombrePrimerEstudiante = sofi.nombre;

// console.log(nombrePrimerEstudiante)

// console.log(sofi.nombre)
// console.log(sofi[`${valueInput}`])

// leer
// valor === objeto.perrito
// console.log(sofi.nombre)

// agregar
// sofi.segundoApellido = 'Mabricachis';
// sofi.esProfe = true;

// editar
// sofi.edad = 33;

// eliminar

// delete sofi.direccion

// console.log(sofi);
// const operaciones = []; 

// const operacion = {
//   monto: Number(inputMonto.value),
//   descripcion: inputDesc.value,
//   tipo: '',
//   categoria: '',
//   fecha: ''
// }

// const sofi = {
//   nombre: 'Sofia',
//   apellido: 'Ferrer',
//   edad: 32,
//   esEstudiante: false,
//   direccion: undefined,
//   segundoApellido: 'Mabricachis',
//   esProfe: true
// };

const lorena = new Object;
lorena.nombre = 'Lorena';
lorena.edad = 35;
lorena.apellido = 'Rosales';
lorena.esEstudiante = true;
lorena.direccion = 'calle uno y avenida dos';

// const root = document.getElementById('root');

// let str = '';
// for (const i in lorena) {
//   if (Object.hasOwnProperty.call(lorena, i)) {
//     // Me muestra cada i del objeto;
//     // console.log(i)
//     str = str + `<p>Esta es la propiedad: ${i} y este es el valor: ${lorena[i]}</p>`
//     // Me muestra el valor de cada i del objeto;
//     // console.log(arr[i])
//     // console.log(lorena[i])
//   }
//   root.innerHTML = str
// }


// str = str  +  '<p>Esta es la propiedad: nombre  y este es el valor: Lorena </p> <p>Esta es la propiedad: edad  y este es el valor: 35 </p>'

const operacion = {
    monto: 0,
    descripcion: '',
    tipo: '',
    categoria: '',
    fecha: ''
  }

  const rellenarArreglo = obj => {
    obj = {
      monto: inputMonto.value,
      descripcion: inputDescrip.value,
      tipo: inputTipo.value,
      categoria: inputCat.value,
      fecha: inputFecha.value
    }
    gastos.push(obj)
  }

const gastos = [
  {
  monto: 100,
  descripcion: 'sueldo',
  tipo: 'Ganancia',
  categoria: 'Trabajo',
  fecha: '12/07/22'
  },
  {
  monto: 20,
  descripcion: 'Taco',
  tipo: 'Gasto',
  categoria: 'Comida',
  fecha: '12/07/22'
  },
  {
  monto: 15,
  descripcion: 'Agua',
  tipo: 'Gasto',
  categoria: 'Comida',
  fecha: '12/07/22'
  }
];

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}

