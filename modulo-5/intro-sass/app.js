const apiPublic = '7e127bd9cabb683df771ddcab140a8a8';
const apiPrivate = 'aa58f246ede578352b8489f4101cfc27483d1118'


const getData = () => {
  const url = `http://gateway.marvel.com/v1/public/comics?offset=0&apikey=${apiPublic}`;
  fetch(url)
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
}

getData()