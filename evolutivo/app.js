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


const verBalance = document.getElementById('ver-balance')
const verCategorias = document.getElementById('ver-categorias')
const verReportes = document.getElementById('ver-reportes')
const verOperacion = document.getElementById('ver-operacion')
const agregaroperacionBoton = document.getElementById('agregar-operacion-boton')
const cancelarAgregarOperacionBoton = document.getElementById('cancelar-agregar-operacion-boton')
const filtroTipo = document.getElementById('filtro-tipo');


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
const vistaEditaroperacion = document.getElementById('vista-editar-operacion')

// editar operacion
const editarDescripcionInput = document.getElementById('editar-descripcion-input');
const editarMontoInput = document.getElementById('editar-monto-input');
const editarTipoOperacion = document.getElementById('editar-tipo-operacion');
const editarCategoriaSelect = document.getElementById('editar-categorias-select');
const editarfechaInput = document.getElementById('editar-fecha-input');
const editarOperacionBtn = document.getElementById('editar-operacion-boton');


const categorias = [
  'Comida',
  'Servicios',
  'Salidas',
  'Educación',
  'Transporte',
  'Trabajo'
];

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
// const operaciones = [];


const generarCategorias = () => {
  const selects = document.getElementsByClassName('categorias-select'); // ["select," "select2"]
  for (let i = 0; i < selects.length; i++) {
    const select = selects[i];
    selects.innerHTML = '';
    // console.log('select:',select,'posición del select' ,i)
    if (select.classList.contains('filtro-categoria')) {
      select.innerHTML = '<option>Todas</option>'
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
})

verOperacion.addEventListener('click', () => {
  vistaOperacion.classList.remove('is-hidden')
  vistaBalance.classList.add('is-hidden')
})

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
  let str = ''; // ' 
  // se recorre el arr de operaciones por cada operacion
  arr.forEach((operacion) => {
    // console.log(operacion)
    // hacemos un destructuring para sacar las propiedades
    const {
      id,
      descripcion,
      categoria,
      fecha,
      monto,
      tipo
    } = operacion;
    str = str +
      `
    <div class="mi-flex is-flex-direction-row" >
      <span class="column is-3">${descripcion}</span>
      <span class="column is-3">${categoria}</span>
      <span class="column is-2 has-text-right fecha">${fecha}</span>
      <span class="column is-2 has-text-right ${tipo === 'GANANCIA'? 'green' : 'red'} ">${monto}</span>
      <span class="column is-2 has-text-right">
      <a class="btn-editar" data-id=${id} >Editar</a>
      <a class="btn-eliminar" data-id=${id} >Borrar</a>
      </span>
    </div>
    
    `
    document.getElementById('operaciones').innerHTML = str;
  })
  const btnsEliminar = document.querySelectorAll('.btn-eliminar');
  const btnsEditar = document.querySelectorAll('.btn-editar');
  // const btnsEliminar = Array.from(document.getElementsByClassName('btn-eliminar'));
  btnsEliminar.forEach(btn => {
    btn.addEventListener('click', e => {
      const arregloSinOperacion = operaciones.filter(operacion => operacion.id !== e.target.dataset.id)
      localStorage.setItem('operaciones',JSON.stringify(arregloSinOperacion))
      operaciones = JSON.parse(localStorage.getItem('operaciones'))
      pintarOperaciones(operaciones)
      mostraroperaciones(operaciones)
      alertify.success('Operación eliminada con éxito');
    })
  })

  btnsEditar.forEach(btn => {
    btn.addEventListener('click',e => {
      const operacionParaEditar = operaciones.filter(operacion => operacion.id === e.target.dataset.id);
      editarOperacion(operacionParaEditar)
      editarOperacionBtn.addEventListener('click', () => {
        console.log(operacionParaEditar)
      })
    })
  })
}

const editarOperacion = arr => {
  const {descripcion, monto, tipo, categoria, fecha} = arr[0];
  vistaBalance.classList.add('is-hidden');
  vistaEditaroperacion.classList.remove('is-hidden');
  editarDescripcionInput.value = descripcion;
  editarMontoInput.value = monto;
  editarTipoOperacion.value = tipo;
  editarCategoriaSelect.value = categoria;
  editarfechaInput.valueAsDate = new Date(fecha);
}


filtroTipo.addEventListener('change', (e) => {
  if(e.target.value !== 'TODOS'){
    const porTipo = operaciones.filter(operacion => operacion.tipo === e.target.value)
    localStorage.setItem('operaciones', porTipo)
    pintarOperaciones(porTipo)
  } else {
    pintarOperaciones(operaciones)
  }
})


const inicializar = () => {
  const inputsFecha = document.querySelectorAll('input[type="date"]')
  inputsFecha.forEach( input => {
    input.valueAsDate = new Date()
  })
  mostraroperaciones(operaciones);
  generarCategorias();
  pintarOperaciones(operaciones);
}

window.onload = inicializar


