
// // if(dia === 'Lunes'){
//   //   'Me toca trabajar en la oficina'
//   // } else if(dia === 'Martes'){
//     //   'Me toca trabajaren casa'
//     // } else if(dia === 'Miercoles'){
//       //   'Me toca jugar Futbol'
//       // } 
      
// let dia = prompt('Que día es hoy?'); // lunes
// // lunes = lunes.charAt(0) = l
//   //  l.toUpperCase() = L 
//   //  L + dia.slice(1) unes = Lunes;
// dia = dia.charAt(0).toUpperCase() + dia.slice(1);
// console.log(dia)
// let accionDelDia = '';

// switch(dia){
//   case 'Lunes':
//     accionDelDia = 'me toca ir a la oficina'
//   break; 
//   case 'Martes':
//     accionDelDia = 'Me toca trabajar en casa'
//   break;
//   case 'Miercoles':
//     accionDelDia = 'Me toca jugar Fut'
//   break;
//   case 'Jueves':
//     accionDelDia = 'Me toca salido con amigos'
//   break;
//   case 'Viernes':
//     accionDelDia = 'Me toca ver Netflix'
//   break;
//   case 'Sabado':
//     accionDelDia = 'Jugar en San Juan'
//   break;
//   case 'Domingo':
//     accionDelDia = 'Me toca ir con el MC'
//   break;
//   default:
//     accionDelDia = 'Ingresa un día entre el lunes y el domingo'
//   break;  
// }

// console.log(accionDelDia);

// || or
// && and

// console.log(2 + 2 == 4 || 3 + 9 == 6)  





// saludo
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

// 1.- Pedir mediante el prompt el nombre.
// 2.- Mostrar dentro de un h1 el saludo. (investigar como mostrar en pantalla el saludo dentro del h1)
// 3.- Darle los estilos de centrar, tipografia y tamaño


// const nombre = prompt('Ingresa tu nombre!');

// Para mostrar en pantalla elementos de js 
// 2.1.- debo traer la etiqueta donde lo voy a mostrar
// 2.2.- Crear el elemento que voy a mostrar
// 2.3.- Mostrar en el html ese elemento nuevo

// 2.1 => 
// const cajaSaludo = document.getElementById('caja-saludo');
// 2.2 => 
// const mensaje =  `<h1 class="estilos"> Hola ${nombre} Bienvenid@ </h1>`;
// 2.3 => 
// cajaSaludo.innerHTML = mensaje;
// document.getElementById('prueba').classList.add('estilos');
// document.write(nombre)

// document.write(`<h1>Hola ${nombre} Bienvenid@</h1>`)
// document.write(`<p>Hola ${nombre} Bienvenid@</p>`)
// document.write(`<nav>Hola ${nombre} Bienvenid@</nav>`)


// const prueba = (event) => {
//   // alert('Se le dio click al boton y disparo el evento!')
//   console.log(event)
// }

// prueba()

// const boton = document.getElementById('boton');

// // boton.addEventListener('click', (e) => {
// //   // alert('funcionando desde el evento!')
// //   console.log(e.target)
// // })

// boton.addEventListener('click', prueba)
