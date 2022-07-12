// // const animales = document.getElementById('animales');

// // animales.addEventListener('click', () => {
// //   if(animales.checked){
// //     document.body.style.backgroundColor = 'cyan'
// //   } else {
// //     document.body.style.backgroundColor = ''
// //   }
// // })

// const mostrarBtn = document.getElementById('mostrar');
// const cancelBtn = document.getElementById('cancelar');
// const favDialog = document.getElementById('favDialog');

// mostrarBtn.addEventListener('click', () => {
//   favDialog.showModal();
// })

// cancelBtn.addEventListener('click', () => {
//   favDialog.close();
// })


// const ardilla = document.getElementById('ardilla')
// const puerquito = document.getElementById('puerquito')
// const tigre = document.getElementById('tigre')

// ardilla.style.display = 'none';
// puerquito.style.display = 'none';
// tigre.style.display = 'none';

// const elegido = prompt('Ingresa el animal');
// console.log(ardilla.dataset.animal)
//   if(ardilla.dataset.animal == elegido){
//     ardilla.style.display = "block" 
//   } else if(puerquito.dataset.animal == elegido){
//     puerquito.style.display = "block" 
//   }else if(tigre.dataset.animal == elegido){
//     tigre.style.display = "block" 
//   }

// ardilla.setAttribute('data-prueba', "prueba1")

// Definí una función aHackerSpeak que reciba como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
// aHackerSpeak('javascript')
// 'j4v45cr1pt'
//  aHackerSpeak('soy una hacker')
// '50y un4 h4ck3r'
//  aHackerSpeak('ADA LOVELACE')
// '4D4 L0V3L4C3'

// Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las o se transforman en 0

const aHackerSpeak = str => {
  str = str.replace('i', '1')
  str = str.replace('e', '3')
  str = str.replace('a', '4')
  str = str.replace('o', '0')
  str = str.replace('I', '1')
  str = str.replace('E', '3')
  str = str.replace('A', '4')
  str = str.replace('O', '0')
  return str
}

// const aHackerSpeak = (hacker) =>{
//   return hacker.replace(/[i]|[I]/g, '1').replace(/[e]|[E]/g, '3').replace(/[a]|[A]/g, '4').replace(/[s]|[S]/g, '5').replace(/[o]|[O]/g, '0')
// }

console.log(aHackerSpeak('javascript'))   
console.log(aHackerSpeak('soy una hacker'))   
console.log(aHackerSpeak('ADA LOVELACE'))   


