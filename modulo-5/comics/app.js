const searchType = document.querySelector('#search-type');
const results = document.querySelector('#results');
const resultsNumber = document.querySelector('.results-number');
const comicCover = document.querySelector('.comic-cover');
const comicTitle = document.querySelector('.comic-title');
const comicPublished = document.querySelector('.comic-published');
const comicWriters = document.querySelector('.comic-writers');
const comicDescription = document.querySelector('.comic-description');
const comicSection = document.querySelector('.comic-section');
const characterSection = document.querySelector('.character-section');
const resultSection = document.querySelector('.results-section');
const characterPortrait = document.querySelector('.character-portrait');
const characterName = document.querySelector('.character-name');
const characterDescription = document.querySelector('.character-description');
const searchButton = document.querySelector('.search-button');
const loaderContainer = document.querySelector('.loader-container');
const searchInput = document.querySelector('.search-input');




const apiPublic = '7e127bd9cabb683df771ddcab140a8a8';
const apiPrivate = 'aa58f246ede578352b8489f4101cfc27483d1118'
const baseUrl = 'http://gateway.marvel.com/v1/public/';
let offset = 0;
let resultsCount = 0;

const getSearchParams = (isSearch) => {
  let searchParams = `?apikey=${apiPublic}&offset=${offset}`

  if(!isSearch){
    return searchParams
  }

  // if(!searchInput.value.length){
  //   return searchParams
  // }

  // if(searchType.value === 'comics') {
  //   searchParams += `&titleStartsWith=${searchInput.value}`
  // }
  
  return searchParams // ?apikey=${apiPublic}&offset=${offset}
}


const getApiURL = (resourse, resourseId, subResourse) => { // comics, 82970
  const isSearch = !resourseId && !subResourse; // true  || false
  let url = `${baseUrl}${resourse}` // http://gateway.marvel.com/v1/public/comics/82970

  if(resourseId){
    url += `/${resourseId}`
  }

  if(subResourse){
    url += `/${subResourse}`
  }

  url += getSearchParams(isSearch) // ?apikey=${apiPublic}&offset=${offset}
  return url; // http://gateway.marvel.com/v1/public/comics/82970/?apikey=${apiPublic}&offset=${offset}
}

const updateresultsCount = count => {
  resultsNumber.innerHTML = count;
  resultsCount = count;
} 

const fecthUrl =  async url => {
  const response = await fetch(url)
  const json = await response.json();
  return json
}

const fetchComics = async () => {
  const {data : { 
    results, 
    total
  }} = await fecthUrl(getApiURL('comics')) // http://gateway.marvel.com/v1/public/comics/?apikey=${apiPublic}&offset=${offset}
  clearresults()
  printComics(results)
  updateresultsCount(total)
  hideLoader()
}


const fetchCharacters = async () => {
  const {data : { 
    results, 
    total
  }} = await fecthUrl(getApiURL('characters'))
  clearresults()
  printCharacters(results)
  hideLoader()
}

// pintar los comicas
const printComics = comics => {
  if(comics.length === 0){
    results.innerHTML = '<h2 class="no-results">No hemos encontrado resultados</h2>'
  }
  
  for (const comic of comics) {
    const comicCard = document.createElement('div');
    comicCard.tabIndex = 0;
    comicCard.classList.add('comic');
    comicCard.onclick = () => {
      fetchComic(comic.id)
    }
    comicCard.innerHTML = `
      <div class="comic-img-container">
        <img src="${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}" alt="${comic.title}" class="comic-thumbnail" />
        </div>
        <h3 class="comic-title">${comic.title}</h3>`
        
    results.append(comicCard)
  }
}

const printCharacters = characters => {
  if(characters.length === 0){
    results.innerHTML = '<h2 class="no-results">No hemos encontrado resultados</h2>'
  }

  for(const character of characters){
    const characterCard = document.createElement('div');
    characterCard.tabIndex = 0;
    characterCard.classList.add('character');
    characterCard.onclick = () => {
      fetchCharacter(character.id)
    }
    characterCard.innerHTML = `
      <div class="character-img-container">
        <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt=${character.name} class="character-thumbnail" />
      </div>
      <div class="character-name-container">
        <h3 class="character-name">${character.name}</h3>
      </div>
    `
    results.append(characterCard)
  }
}

const fetchComic = async comicId => {  // 82970
  showloader()
  const {
    data : 
    {
      results : 
      [comic]
    }
  } = await fecthUrl(getApiURL('comics', comicId)) // http://gateway.marvel.com/v1/public/comics/82970/?apikey=${apiPublic}&offset=${offset}
  
  const coverPath = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  const releaseDate = new Intl.DateTimeFormat('es-MX').format(
    new Date(comic.dates.find(date => date.type === 'onsaleDate').date)
    )
  const writers = comic.creators.items 
  .filter(creator => creator.role === 'writer') 
  .map(creator => creator.name)
  .join(', ')
  updateComicDetails(
    coverPath,
    comic.title,
    releaseDate,
    writers,
    comic.description
  )
  showComicDetail()
}

const fetchCharacter = async characterId => {
  showloader()
  const {
    data : 
    {
      results : 
      [character]
    }
  } = await fecthUrl(getApiURL('characters', characterId)) // http://gateway.marvel.com/v1/public/characters/id/?apikey=${apiPublic}&offset=${offset}
  updateCharacterDetails(
    `${character.thumbnail.path}.${character.thumbnail.extension}`,
    character.name,
    character.description
  )
  showCharacterDetail()
  hideLoader()
} 

const updateComicDetails = (img, title, releaseDate, writers, description) => {
  comicCover.src = img;
  comicTitle.innerHTML = title;
  comicPublished.innerHTML = releaseDate;
  comicWriters.innerHTML =  writers;
  comicDescription.innerHTML = description 
  hideLoader()
}

const updateCharacterDetails = (img, name, description) => {
  characterPortrait.src = img;
  characterName.innerHTML = name
  characterDescription.innerHTML = description
}

const clearresults = () => results.innerHTML = '';

const showloader = () => loaderContainer.classList.remove('hidden');

const hideLoader = () => loaderContainer.classList.add('hidden');

const hiddeDetails = () => {
  comicSection.classList.add('hidden');
  resultSection.style.display = 'none';
}

const showComicDetail = () => {
  hiddeDetails();
  comicSection.classList.remove('hidden');
}

const showCharacterDetail = () => {
  hiddeDetails()
  characterSection.classList.remove('hidden');
}

const search = () => {
  showloader()
  if(searchType.value === 'comics'){
    fetchComics()
  }
  if(searchType.value === 'characters'){
    fetchCharacters()
  }
}

const inicio = () => {
  searchButton.addEventListener('click', () => {
    search();
  })
  search();
}

window.onload = inicio;