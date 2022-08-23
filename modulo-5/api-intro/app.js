// // e.target.id = character
// // e.target.id = location
// // e.target.id = episode


const apiPublic = '7e127bd9cabb683df771ddcab140a8a8';
const apiPrivate = 'aa58f246ede578352b8489f4101cfc27483d1118'

// const url = `https://rickandmortyapi.com/api/character`;
const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiPublic}`;

// const root = document.getElementById('root')

fetch(url) // es una promesa pendiente
// fetch(url) // es una promesa pendiente
  .then(resp => resp.json()) // Resuelve exitosa => Respuesta status 200
  .then(json => console.log(json))
//   .catch(err => console.error(err)) // Resuelve fallida


//   const printData = datos => {
//     console.log(datos.results)
//     let str = '';
//     datos.results.forEach(personaje => {
//       str +=`<div>
//             <figure>
//               <img src=${personaje.image} alt="">
//             </figure>
//             <p>${personaje.name}</p>
//           </div>`
//     });
//     root.innerHTML = str;
//   }

















//   // console.log('Mensaje Normal')
//   // console.warn('Una advertencia')
//   // console.error('Aqui se muestra un error')

