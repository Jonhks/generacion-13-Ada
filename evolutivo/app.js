const descripcion = document.getElementById('descripcion')
const monto = document.getElementById('monto')
const tipo = document.getElementById('tipo')
const categoria = document.getElementById('categoria')
const fecha = document.getElementById('fecha')
const cancelarBtn = document.getElementById('cancelar-btn')
const agregarBtn = document.getElementById('agregar-btn')


agregarBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(descripcion.value)
  console.log(monto.value)
  console.log(tipo.value)
  console.log(categoria.value)
  console.log(fecha.value)
})