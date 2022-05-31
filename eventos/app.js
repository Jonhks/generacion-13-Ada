// const ejemplo = (event, numero) =>{
//   console.log(numero)
//   console.log(event.target)
// }

// document.getElementById('boton').addEventListener('mousedown', event => {
//   // console.log(event)
//      if (event.button == 0) {
//     console.log("Left button");
//   } else if (event.button == 1) {
//     console.log("Middle button");
//   } else if (event.button == 2) {
//     console.log("Right button");
//   }
// })


// window.addEventListener('keydown', event => {
//   console.log(event.key)
// })


// const input = document.getElementById('input')
// const parrafo = document.getElementById('parrafo')

// input.addEventListener('keyup', event => {
//   console.log(event.key)

// })

// window.addEventListener("keydown", function(event) {
//   // console.log(event.key)
//   if (event.key == "Enter") {
//     document.body.style.background = "lightblue";
//   }

//   if (event.key == "Enter" && event.ctrlKey) {
//     document.body.style.background = "orange";
//   }
// });

// window.addEventListener("keyup", function(event) {
//   if (event.key == "Enter") {
//     document.body.style.background = "";
//   }
// });

// console.log(document.getElementById('input'));// me aseguro que exista el elemento o sea correcto
const input =  document.getElementById('input'); // tengo el input de donde tomar la info
const renderText = document.getElementById('render-text'); // Tengo el parrafo donde voy a mostrar
const btnModoOscuro = document.getElementById('modo-oscuro');


input.addEventListener('input', (event) => {
  const textoIngresado = event.target.value;
  renderText.innerHTML = textoIngresado;
})


btnModoOscuro.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('asdnsad')
//   document.body.classList.toggle('modo-oscuro');
//   document.body.classList.toggle('una');
})

