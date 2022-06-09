const edad = 10;


const calcularEdad = edad => {
  if(edad > 18){
    alert('Es mayor')
  } else {
    alert('No es mayor')
  }
}


calcularEdad(edad);



// Realizar un diagrama de flujo y pseudocódigo que representen el algoritmo para obtener el área de un triángulo.

//  INICIO
//   LEER Base
//   LEER Altura
//    OPERACIÓN base * altura / 2
//   MOSTRAR resultado de la operación
//  FIN



const base = 10;
const altura = 5;

const calcularAreaTriangulo = (base, altura) => {
  return base * altura / 2;
}

calcularAreaTriangulo(base, altura);