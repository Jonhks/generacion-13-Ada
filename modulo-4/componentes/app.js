// // elemento que voy a ocultar o mostrar
// const home = document.getElementById('home');
// const about = document.getElementById('about');
// const contact = document.getElementById('contact');
// const blog = document.getElementById('blog');
// const body = document.getElementById('body');
// const header = document.getElementById('header');
// // const header = document.getElementsByClassName('header');
// // console.log(header[0])

// // Botones que ocultan o muestran los elemetos
// const btnHome = document.getElementById('btn-home');
// const btnAbout = document.getElementById('btn-about');
// const btnContact= document.getElementById('btn-contact');
// const btnBlog = document.getElementById('btn-blog');
// const togglebtn1 = document.getElementById('toggle-btn-1');

// btnHome.addEventListener('click', () => {
//   home.classList.remove('oculto');
//   about.classList.add('oculto');
//   contact.classList.add('oculto');
//   blog.classList.add('oculto');
// })

// btnAbout.addEventListener('click', () => {
//   about.classList.remove('oculto');
//   home.classList.add('oculto');
//   contact.classList.add('oculto');
//   blog.classList.add('oculto');
// })

// btnContact.addEventListener('click', () => {
//   contact.classList.remove('oculto');
//   home.classList.add('oculto');
//   about.classList.add('oculto');
//   blog.classList.add('oculto');
// })

// btnBlog.addEventListener('click', () => {
//   blog.classList.remove('oculto');
//   home.classList.add('oculto');
//   contact.classList.add('oculto');
//   about.classList.add('oculto');
// })

// togglebtn1.addEventListener('click', () => {
//   if(togglebtn1.checked){
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
//     header.style.backgroundColor = '#00acee'
//   }else {
//     body.style.backgroundColor = 'white';
//     body.style.color = 'black';
//     header.style.backgroundColor = '#35302D'
//   }
// })


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
}); 

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});


