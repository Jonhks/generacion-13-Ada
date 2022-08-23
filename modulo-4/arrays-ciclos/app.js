// Que son los arreglos

// const magali = 'Magali';
// const florencia = 'Florencia';
// const julieta = 'Julieta';

// const nombre = 'Magali'; // String
// const edad = 28; // Number
// const esMujer = true; // boolean;




// const otroArreglo = ['jonh', 1000, false, NaN, null, undefined, ['otraCosa'],
//  () =>{
  //   if( 2 == 2){
    //     return true
    //   }
    //  }
    // ];

    // posicionamiento visual         1     ,      2     ,     3    ,   4   ,      5
    // const listaAsistentes13Junio = ['Magali', 'Florencia', 'Julieta', 'Alba', 'Cristina'];
    // posicion logica                 0     ,      1     ,     2    ,  3    ,     4
    //listaAsistentes13Junio[]       Magali   ,Florencia  , julieta
    
    // console.log(listaAsistentes13Junio[1]);


    // const multiDimenesional = [
    //   'cero','uno', 'dos', 'tres',
    //  ['Lunes' , 'Martes', 'Miercoles', ['Perro', 'Gato', 'Araña', 'Conejo']],
    //  ['Pepe', 'Juan', 'Mike']
    // ];

    // console.log(multiDimenesional[4][3].length -1);


  //   const otroArreglo = ['jonh', 1000, false, NaN, null, undefined, ['otraCosa'],
  // () =>{
  //   if( 2 == 2){
  //       return true
  //     }
  //    }
  //   ];

    // console.log(otroArreglo[7])

// const listaAsistentes13Junio = ['Magali', 'Florencia', 'Julieta', 'Alba', 'Cristina'];

//Al darle al clcik al boton me abra un prompt y agregue el valor al  arreglo y despues me imprima la lista de los asistentes actuales

// 1.-  Crear ese boton y traerlo a js x 
// 2.-  Darle un evento al boton x 
// 3.-  El evento debe disparar un prompt  x
// 4.-  Guardar el valor del prompt x
// 5.-  Agregar ese valor a la lista de asistentes x 
// 6.-  Imprimir la lista actualizada x

// const btnAgregar = document.getElementById('agregar');

// console.log(listaAsistentes13Junio)

// btnAgregar.addEventListener('click' , () =>{})


// btnAgregar.addEventListener('click' , () => {
//   const nuevaAsistente = prompt('Nueva asistente');
//   listaAsistentes13Junio.push(nuevaAsistente);
//   console.log(listaAsistentes13Junio);
// })


// console.log(listaAsistentes13Junio);

// listaAsistentes13Junio.push('Thanya')
// listaAsistentes13Junio.push('Maria')

// console.log(listaAsistentes13Junio);


// Ciclo FOR o bucle for

// () => {}
// if(){}

// for(inicialización, limite, incremento){
  // ejecución del código
// }


// for(let i = 1; i <= 10; i = i + 3 /* i++ */){
//   console.log(i)
//   // i++
// }

//  i    console   i = i + 1
//  1      1           2
//  2      2           3
//  3      3           4
//  4      4           5
//  5 


// const listaAsistentes13Junio = ['Magali', 'Florencia', 'Julieta', 'Alba', 'Cristina'];

// i =  0,1,2,3,4

// console.log(listaAsistentes13Junio[0])

// for(let i = 0; i < listaAsistentes13Junio.length; i++){
//   console.log(listaAsistentes13Junio[i])
// }


// crear una funcion que tome un arreglo de numeros y nos devuelva los numeros que sean pares

// 1.- Crear la funcion que tome un parametro de un arr x 
// 2.- recorrer el arreglo x 
// 3.- verificar si el valor actual es par x
//  -  Si es par 4.-  Mostrar el numero actual x
// -   Sino es par no hacer nada x

// const numeros2 = [5,8,9,3,1,4,5]
// const numeros3 = [0,0,0,0,0,0,0,0,0,0,0,,0,0,0]
//position logica 0, 1, 2, 3, 4, 5, 6, 7 , 8, 9
// const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // .length = 11


// numeros[1] = 1;
// i   arr[i]  i = i + 1 (i++)
// 0     1        1
// 1     2
// const pares = arr => {
//   for(let i = 0; i < arr.length; i++){
//     const numeroActual = arr[i];
//     if(numeroActual % 2 === 0){
//       console.log('El número es par', numeroActual)
//     }
//   }
// }

// pares(numeros)
// pares(numeros2)
// pares(numeros3)



// Crear una funcion que ejecute un prompt y con el valor del prompt busquen si el nombre ingresado se encuentra en el arreglo de nombres, si se encuentra muestren un alert con el mensaje de "El nombre de ${nombre} se enceuntra en la ${posición} del arreglo" , si no un alert que nos diga que ese ${nombre} no se encuntra 

const nombres = ['Sofi', 'Camila', 'Lorena', 'julieta', 'Sabrina', 'Nadia'];

const btnAgregar = document.getElementById('agregar');


btnAgregar.addEventListener('click' , () => {
  const nombreAbuscar = prompt('Ingresa el nombre')
  for(let i = 0;i < nombres.length; i++){
    const nombre = nombres[i]
    if(nombre === nombreAbuscar){
      alert(`El nombre ${nombre} se encuentra en la posición ${i}`)
      return
    }
  }
  alert(`El nombre ${nombreAbuscar} No encuentra en el arreglo`)
})