// const descripcion = document.getElementById('descripcion')
// const monto = document.getElementById('monto')
// const tipo = document.getElementById('tipo')
// const categoria = document.getElementById('categoria')
// const fecha = document.getElementById('fecha')
// const cancelarBtn = document.getElementById('cancelar-btn')
// const agregarBtn = document.getElementById('agregar-btn')

// agregarBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(descripcion.value)
//   console.log(monto.value)
//   console.log(tipo.value)
//   console.log(categoria.value)
//   console.log(fecha.value)
// })

// Leer datos de firabse
db.collection("operaciones")
  .onSnapshot((querySnapshot) => {
    const operacionesFirebase = [];
    querySnapshot.forEach((doc) => {
      operacionesFirebase.push({
        ...doc.data(),
        idDoc: doc.id
      });
    });
    // console.log(operacionesFirebase)
  });

const verBalance = document.getElementById('ver-balance')
const verCategorias = document.getElementById('ver-categorias')
const verReportes = document.getElementById('ver-reportes')
const verOperacion = document.getElementById('ver-operacion')
const agregaroperacionBoton = document.getElementById('agregar-operacion-boton')
const cancelarAgregarOperacionBoton = document.getElementById('cancelar-agregar-operacion-boton')
const filtroTipo = document.getElementById('filtro-tipo');
const filtroCategoria = document.getElementById('filtro-categoria');


const vistaBalance = document.getElementById('vista-balance')
const vistaCategoria = document.getElementById('vista-categoria')
const vistaReportes = document.getElementById('vista-reportes')
const vistaOperacion = document.getElementById('vista-operacion')
// inputs agregar operacion
const descripcionInput = document.getElementById('descripcion-input')
const montoInput = document.getElementById('monto-input')
const tipoOperacion = document.getElementById('tipo-operacion')
const categoriasSelect = document.getElementById('categorias-select')
const fechaInput = document.getElementById('fecha-input')
const filtroOrden = document.getElementById('filtro-orden')
const vistaEditaroperacion = document.getElementById('vista-editar-operacion')

// editar operacion
const editarDescripcionInput = document.getElementById('editar-descripcion-input');
const editarMontoInput = document.getElementById('editar-monto-input');
const editarTipoOperacion = document.getElementById('editar-tipo-operacion');
const editarCategoriaSelect = document.getElementById('editar-categorias-select');
const editarfechaInput = document.getElementById('editar-fecha-input');
const editarOperacionBtn = document.getElementById('editar-operacion-boton');

// reportes

const conReportes = document.getElementById('con-reportes')
const sinReportes = document.getElementById('sin-reportes')


const categorias = [
  'comida',
  'servicios',
  'salidas',
  'educacion',
  'transporte',
  'trabajo'
];

// const operaciones = [];
const obtenerOperaciones = () => {
  // return JSON.parse(localStorage.getItem('operaciones')) || [];
  return [{
      id: 0,
      descripcion: 'Desayuno',
      monto: 10,
      categoria: 'comida',
      tipo: 'GASTO',
      fecha: '12/07/2022' // ["12", "07" , "2022"] [1] = 07
    },
    {
      id: 1,
      descripcion: 'cena',
      monto: 90,
      categoria: 'comida',
      tipo: 'GASTO',
      fecha: '01/08/2022' //08
    },
    {
      id: 2,
      descripcion: 'clases',
      monto: 100,
      categoria: 'trabajo',
      tipo: 'GANANCIA',
      fecha: '23/07/2022' // 07 
    },
    {
      id: 3,
      descripcion: 'gasolina',
      monto: 30,
      categoria: 'transporte',
      tipo: 'GASTO',
      fecha: '12/06/2022' //06
    },
    {
      id: 4,
      descripcion: 'cine',
      monto: 55,
      categoria: 'transporte',
      tipo: 'GASTO',
      fecha: '8/07/2022' //07 
    },
    {
      id: 5,
      descripcion: 'sueldo',
      monto: 1000,
      categoria: 'transporte',
      tipo: 'GANANCIA',
      fecha: '12/08/2022' //08
    },
  ]
}

let operaciones = obtenerOperaciones()


// let paraFiltrar = [...operaciones]


const generarCategorias = () => {
  const selects = document.getElementsByClassName('categorias-select'); // ["select," "select2"]
  for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    selects.innerHTML = '';
    // console.log('select:',select,'posición del select' ,i)
    if (select.classList.contains('filtro-categoria')) {
      select.innerHTML = '<option value="TODAS" >Todas</option>'
    }
    for (let j = 0; j < categorias.length; j++) {
      // console.log('categoria actual:', categorias[j], 'Posición de la categoria: ', j)
      select.innerHTML += `<option value=${categorias[j]}>${categorias[j]}</option>`
    }
  }
}





const mostraroperaciones = (arr) => {
  if (!arr.length) {
    document.getElementById('sin-operaciones').classList.remove('is-hidden')
    document.getElementById('con-operaciones').classList.add('is-hidden')
  } else {
    document.getElementById('sin-operaciones').classList.add('is-hidden')
    document.getElementById('con-operaciones').classList.remove('is-hidden')
  }
}




verBalance.addEventListener('click', () => {
  vistaCategoria.classList.add('is-hidden')
  vistaReportes.classList.add('is-hidden')
  vistaBalance.classList.remove('is-hidden')
})

verCategorias.addEventListener('click', () => {
  vistaCategoria.classList.remove('is-hidden')
  vistaReportes.classList.add('is-hidden')
  vistaBalance.classList.add('is-hidden')
})

verReportes.addEventListener('click', () => {
  vistaCategoria.classList.add('is-hidden')
  vistaReportes.classList.remove('is-hidden')
  vistaBalance.classList.add('is-hidden')
  if (!operaciones.length) {
    conReportes.classList.add('is-hidden')
    sinReportes.classList.remove('is-hidden')
  } else {
    conReportes.classList.remove('is-hidden')
    sinReportes.classList.add('is-hidden')
  }
  totalPorMes(operaciones);
  totalPorCategoria(operaciones, categorias)
})

const totalPorCategoria = (operaciones, categorias) => {
  categorias.forEach(categoria => { // comida [{}, {}]
    const porCategoria = operaciones.filter(operacion => operacion.categoria === categoria)
    const porCategoriaGanancia = porCategoria.filter(operacion => operacion.tipo === 'GANANCIA').reduce((count, current) => count + current.monto, 0)
    const porCategoriaGasto = porCategoria.filter(operacion => operacion.tipo === 'GASTO').reduce((count, current) => count + current.monto, 0)
    // console.log(`La categoria ${categoria} su gasto es de: ${porCategoriaGasto}`)
    // console.log(`La categoria ${categoria} su ganacia es de: ${porCategoriaGanancia}`)
    console.log(`El balance de la categoria  ${categoria} es de ${porCategoriaGanancia - porCategoriaGasto}`)
  })
  // console.log(operaciones)
  // console.log(categorias)
}


const totalPorMes = arr => {
  const mesesSinRepetir = [...new Set(arr.map(operacion =>
    operacion.fecha.split('/')[1]))].sort()
  for (let i = 0; i < mesesSinRepetir.length; i++) { // 06, 07 , 07 , 08 , 07  === 06
    const operacionesPorMes = arr.filter(operacion => operacion.fecha.split('/')[1] === mesesSinRepetir[i])
    const porTipoGanancia = operacionesPorMes.filter(operacion =>
      operacion.tipo === 'GANANCIA').reduce((count, current) => count + current.monto, 0)
    const porTipoGasto = operacionesPorMes.filter(operacion =>
      operacion.tipo === 'GASTO').reduce((count, current) => count + current.monto, 0)
    // console.log(`Esto sería del mes ${mesesSinRepetir[i]} tenemos el total de Ganancia de: ${porTipoGanancia}`)
    // console.log(`Esto sería del mes ${mesesSinRepetir[i]} tenemos el total de Gasto de: ${porTipoGasto}`)
  }
}

verOperacion.addEventListener('click', () => {
  vistaOperacion.classList.remove('is-hidden')
  vistaBalance.classList.add('is-hidden')
})

// db.collection("operaciones").doc("SF")
// .onSnapshot((doc) => {
//     console.log("Current data: ", doc);
// .onSnapshot.forEach(doc => console.log(doc))
// });

agregaroperacionBoton.addEventListener('click', () => {
  if (descripcionInput.value.trim().length === 0 || montoInput.value == 0) {
    alertify.error('Todos los campos son necesarios y el monto tiene que ser mayor a 0');

    return
  }

  // creamos un obj por cada operacion
  const operacion = {
    id: uuidv4(),
    descripcion: descripcionInput.value,
    monto: montoInput.value,
    tipo: tipoOperacion.value,
    categoria: categoriasSelect.value,
    fecha: fechaInput.value
  }

  db.collection("operaciones").add(operacion)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  //  agregamos el objeto (operacion) al arreglo de operaciones
  operaciones.push(operacion)
  // escondemos la vista del formulario y mostramos la vista de la lista de operaciones
  vistaOperacion.classList.add('is-hidden')
  vistaBalance.classList.remove('is-hidden')
  // limpiamos lo inputs y regresamos a valores iniciales
  descripcionInput.value = ''
  montoInput.value = 0
  tipoOperacion.value = 'GANANCIA'
  categoriasSelect.value = 'Servicios'
  // fechaInput.value = new Date();
  // ejecutamos la funcion que nos muestra la imagen si no hay nada en el arreglo
  mostraroperaciones(operaciones)
  // ejecutamos la funcion que pinta o muestra las operaciones (mandamos el arreglo de operaciones)

  // guardamos el arreglo en el LS
  localStorage.setItem('operaciones', JSON.stringify(operaciones))

  pintarOperaciones(operaciones)
  alertify.success('Operación agregada con éxito');

})


const pintarOperaciones = arr => {
  document.getElementById('operaciones').innerHTML = ''

  const template = arr.reduce((str, actual) => str + `
    <div class="mi-flex is-flex-direction-row" >
      <span class="column is-3">${actual.descripcion}</span>
      <span class="column is-3">${actual.categoria}</span>
      <span class="column is-2 has-text-right fecha">${actual.fecha}</span>
      <span class="column is-2 has-text-right ${actual.tipo === 'GANANCIA'? 'green' : 'red'} ">${actual.monto}</span>
      <span class="column is-2 has-text-right">
      <a class="btn-editar" data-id=${actual.id} >Editar</a>
      <a class="btn-eliminar" data-id=${actual.id} >Borrar</a>
      </span>
      </div>
      `, '')
  document.getElementById('operaciones').innerHTML = template;
  // console.log(template)
  // let str = ''; // ' 
  // // se recorre el arr de operaciones por cada operacion
  // arr.forEach((operacion) => {
  //   // console.log(operacion)
  //   // hacemos un destructuring para sacar las propiedades
  //   const {
  //     id,
  //     descripcion,
  //     categoria,
  //     fecha,
  //     monto,
  //     tipo
  //   } = operacion;
  //   str = str +
  //     `
  // <div class="mi-flex is-flex-direction-row" >
  //   <span class="column is-3">${descripcion}</span>
  //   <span class="column is-3">${categoria}</span>
  //   <span class="column is-2 has-text-right fecha">${fecha}</span>
  //   <span class="column is-2 has-text-right ${tipo === 'GANANCIA'? 'green' : 'red'} ">${monto}</span>
  //   <span class="column is-2 has-text-right">
  //   <a class="btn-editar" data-id=${id} >Editar</a>
  //   <a class="btn-eliminar" data-id=${id} >Borrar</a>
  //   </span>
  // </div>

  //   `
  // })
  const btnsEliminar = document.querySelectorAll('.btn-eliminar');
  const btnsEditar = document.querySelectorAll('.btn-editar');
  // const btnsEliminar = Array.from(document.getElementsByClassName('btn-eliminar'));
  btnsEliminar.forEach(btn => {
    btn.addEventListener('click', e => {
      console.log('eliminda')
      db.collection("operaciones").doc("EFwTsm8V0RdMcODfwGf5").delete()
        .then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      const arregloSinOperacion = operaciones.filter(operacion => operacion.id !== e.target.dataset.id)
      localStorage.setItem('operaciones', JSON.stringify(arregloSinOperacion))
      // operaciones = JSON.parse(localStorage.getItem('operaciones'))
      pintarOperaciones(operaciones)
      mostraroperaciones(operaciones)
      alertify.success('Operación eliminada con éxito');
    })
  })

  btnsEditar.forEach(btn => {
    btn.addEventListener('click', e => {
      const operacionParaEditar = operaciones.filter(operacion => operacion.id === e.target.dataset.id);
      editarOperacion(operacionParaEditar)
      editarOperacionBtn.addEventListener('click', () => {
        console.log(operacionParaEditar)
      })
    })
  })
}

const editarOperacion = arr => {
  const {
    descripcion,
    monto,
    tipo,
    categoria,
    fecha
  } = arr[0];
  vistaBalance.classList.add('is-hidden');
  vistaEditaroperacion.classList.remove('is-hidden');
  editarDescripcionInput.value = descripcion;
  editarMontoInput.value = monto;
  editarTipoOperacion.value = tipo;
  editarCategoriaSelect.value = categoria;
  editarfechaInput.valueAsDate = new Date(fecha);
}

// filtroOrden.addEventListener('change', () => {
//   if (filtroOrden.value === "MENOR_MONTO") {
//       const menorMonto = operaciones.sort(
//         (a, b) => Number(a.monto) - Number(b.monto)
//       );
//       pintarOperaciones(menorMonto)
//   }
//   if (filtroOrden.value === "MAYOR_MONTO") {
//       const menorMonto = operaciones.sort(
//         (a, b) => Number(b.monto) - Number(a.monto)
//       );
//       pintarOperaciones(menorMonto)
//   }
//   if(filtroOrden.value === 'A/Z'){
//     const az = operaciones.sort((a,b) => {
//       if(a.descripcion.toLowerCase() < b.descripcion.toLowerCase()){
//         return -1
//       }
//     })
//     pintarOperaciones(az)
//   }
//   if(filtroOrden.value === 'Z/A'){
//     const za = operaciones.sort((a,b) => {
//       if(a.descripcion.toLowerCase() > b.descripcion.toLowerCase()){
//         return -1
//       }
//     })
//     pintarOperaciones(za);
//   }
//   if(filtroOrden.value === 'MAS_RECIENTES'){
//     const reciente = operaciones.sort((a,b) => 
//       new Date(a.fecha) - new Date(b.fecha))
//     console.log(reciente);
//   }
//   // if(filtroOrden.value === 'MENOR_MONTO'){
//   //   const resultMonto = operaciones.sort((a, b) => {
//   //     if(a.monto < b.monto){
//   //       return -1
//   //     }
//   //     if(a.monto >  b.monto){
//   //       return 1
//   //     }
//   //   })
//   // }
//   // if(filtroOrden.value === 'MAYOR_MONTO'){
//   //   const resultMonto = operaciones.sort((a, b) => {
//   //     if(a.monto > b.monto){
//   //       return -1
//   //     }
//   //     if(a.monto <  b.monto){
//   //       return 1
//   //     }
//   //   })
//   //   console.log(resultMonto)
//   // }
// })



const filtros = (e) => {
  const porCategoria = filtroCategoria.value;
  const porTipo = filtroTipo.value;
  const porOrden =  filtroOrden.value

  let operaciones = obtenerOperaciones();

  if (porCategoria !== 'TODAS') {
    operaciones = operaciones.filter(operacion => operacion.categoria === porCategoria)
  }

  if (porTipo !== 'TODOS') {
    operaciones = operaciones.filter(operacion => operacion.tipo === porTipo)
  }

  if (porOrden === "MENOR_MONTO") {
    operaciones = operaciones.sort(
      (a, b) => Number(a.monto) - Number(b.monto)
    );
  }
  if (porOrden === "MAYOR_MONTO") {
    operaciones = operaciones.sort(
      (a, b) => Number(b.monto) - Number(a.monto)
    );
  }
  if (porOrden === 'A/Z') {
    operaciones = operaciones.sort((a, b) => {
      if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) {
        return -1
      }
    })
  }
  if (porOrden === 'Z/A') {
    operaciones = operaciones.sort((a, b) => {
      if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) {
        return -1
      }
    })
  }
  if (porOrden === 'MAS_RECIENTES') {
    operaciones = operaciones.sort((a, b) =>
      new Date(a.fecha) - new Date(b.fecha))
  }
  pintarOperaciones(operaciones)
}


filtroCategoria.addEventListener('change', filtros)
filtroTipo.addEventListener('change', filtros)
filtroOrden.addEventListener('change', filtros)

// const numeros = [8,7,4,5,21,3,6,4,9,7,5,9]; //88

// const root = document.getElementById('root');

// const template = numeros.reduce((str, actual, posicion) => str +  `
//   <div>
//     <p>El numero en la posición ${posicion} es el: ${actual} </p>
//   </div>
//   `
//   ,'')

// console.log(template)

// let str = '';
// for(let i = 0; i < numeros.length; i++){
//   const actual = numeros[i];
//   str += 
// `
//     <div>
//       <p>El numero en la posición ${i} es el: ${actual} </p>
//     </div>
//   `
// }

// root.innerHTML = template;









// const resultado = numeros.reduce((count, actual) => count + actual ,0)
// console.log(resultado)

// let count = 0; //8, 15, 19, 
// for(let i = 0; i < numeros.length; i++){
//   count = count + numeros[i]
// }
// console.log(count)

// const letras = ['h', 'o', 'l', 'a', ' ', 'c', 'h', 'i', 'c', 'a', 's' ];

// const palabra = letras.reduce((str, actual) => str + actual ,'');
// console.log(palabra)

// let str = ''; // 'sda'
// for(let i = 0; i < letras.length; i++){
//   const actual = letras[i]
//   str += actual
// }

// console.log(str)
























const inicializar = () => {
  const inputsFecha = document.querySelectorAll('input[type="date"]')
  inputsFecha.forEach(input => {
    input.valueAsDate = new Date()
  })
  mostraroperaciones(operaciones);
  generarCategorias();
  pintarOperaciones(operaciones);
  // filtros()
}

window.onload = inicializar