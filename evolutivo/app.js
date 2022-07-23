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

const categorias = [
  'Comida',
  'Servicios',
  'Salidas',
  'Educación',
  'Transporte',
  'Trabajo'
];

const operaciones = ['njds'];



const generarCategorias = () => {
  const selects = document.getElementsByClassName('categorias-select');
  for(let i = 0; i < selects.length; i++){
    const select = selects[i];
    // console.log('select:',select,'posición del select' ,i)
    if(select.classList.contains('filtro-categoria')){
      select.innerHTML = '<option>Todas</option>'
    }
    for(let j = 0; j < categorias.length; j++){
      // console.log('categoria actual:', categorias[j], 'Posición de la categoria: ', j)
      select.innerHTML += `<option value=${categorias[j]}>${categorias[j]}</option>`
    }
  }
}

generarCategorias();



const mostraroperaciones = (arr) => {
  if(!arr.length){
    document.getElementById('sin-operaciones').classList.remove('is-hidden')
    document.getElementById('con-operaciones').classList.add('is-hidden')
  } else { 
    document.getElementById('sin-operaciones').classList.add('is-hidden')
    document.getElementById('con-operaciones').classList.remove('is-hidden')
  }
} 

mostraroperaciones(operaciones);

