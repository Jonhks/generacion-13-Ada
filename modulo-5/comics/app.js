const searchType = document.querySelector('#search-type');
// const elemento = (el) => document.querySelector(el)


const apiPublic = '7e127bd9cabb683df771ddcab140a8a8';
const apiPrivate = 'aa58f246ede578352b8489f4101cfc27483d1118'
const baseUrl = 'http://gateway.marvel.com/v1/public/';
let offset = 0;

// const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiPublic}&offset=${offset}`;


const getSearchParams = (isSearch) => {
  let url = baseUrl;
  let searchParams = `?apikey=${apiPublic}&offset=${offset}`
  
  if(searchType.value === 'comics'){
    url += `${searchType.value}${searchParams}`
  }
  fetch(url)
  .then(resp => resp.json())
  .then(json => console.log(json))
  .catch(err  => console.error(err))
}

getSearchParams()


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});