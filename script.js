// You can edit ALL of the code here
// window.onload = setup;
// const cardContainer = document.getElementById('root');
// const searchDescription = document.getElementById('searchDescription');
// const searchField = document.getElementById('searchField');
// var allEpisodes;

// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
//  searchField.addEventListener("keyup", makeSearch);
// }

// function makePageForEpisodes(episodeList) {
//   searchDescription.innerText = `Displaying ${allEpisodes.length}/${allEpisodes.length} episodes`;
//   show(episodeList);
// }

// function show(arr) {
//   for (const episode of arr) {
//     let card = makeCard(episode);
//     cardContainer.appendChild(card);
//   }
// }

// function makeCard(episode) {
//   let template = `
//       <h1 class='text-center h5 mt-4'>${episode.name} - S${lead(episode.season)}E${lead(episode.number)}</h1>
//       <div class="card-body text-center">
//         <img src='${episode.image.medium}'>
//         <div class="card-title">${episode.summary}</div>
//       </div> `;
//   card = document.createElement("div");
//   card.classList.add("card", "mx-2", "px-3", "shadow");
//   card.innerHTML = template;
//   return card;
// }

// function lead(num) {

//   num = num + '';
//   if (num.length < 2) {
//     return '0' + num;
//   } else {
//     return num
//   }

// }

// function makeSearch(event) {
//   let resultArray = allEpisodes.filter((item) => {
//     if (item.name.toLowerCase().includes(event.target.value.toLowerCase()) || item.summary.toLowerCase().includes(event.target.value.toLowerCase())){
//       return true;
//     }
//   });

//   cardContainer.innerHTML = '';
//   show(resultArray);
//   searchDescription.innerText = `Displaying ${resultArray.length}/${allEpisodes.length} episodes`;

// }

// function selectEpisode(element) {
//   console.log(element.target.value);
// }


// let rootElement = getElement('root');
// let searchBar = getElement('search-bar');
// searchBar.addEventListener('keypress', search);

// function getElement(name) {
//   return document.getElementById(name);
// }

// function handleSearch(event) {
//   let filteredEpisodes = search(event.target.value);
//   let resultNode = getElement('result');
// }

function setup() {
    getShowData('https://api.tvmaze.com/shows', (allShows) => {
        appendToOptionShows(allShows)
        getAllShows(allShows[0].id)
    })
}

function getShows(id) {
    getData(`https://api.tvmaze.com/shows/${id}/episodes`, (allEpisodes) => {
        makeEpisodesPage(allEpisodes);
        searchInput(allEpisodes)
        appendToTheSelect(allEpisodes)
    })
}

function createElement(tagName, className, parentElement) {
    const element = document.createElement(tagName)
    element.className = className
    parentElement.appendChild(element)
    return element
}

const rootElement = document.getElementById('root');
const firstDiv = createElement('div', 'navbar', 'rootElem');
const selectShows = createElement('select', 'shows', 'firstDiv');
const inputTag = createElement("input", "search-input", firstDiv);
const pLabelTag = createElement("p", "p-label-tag", firstDiv);
const secondDiv = createElement("div", "cards row", rootElem);
rootElem.className = "container";
inputTag.placeholder = "Search episodes..";

function sortShowsAlphabetical(showsArray) {
    showsArray.sort(function (a, b){
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        return 0;
    })

}

function appendToOptionShows(arrayOfShows) {
    sortShowsAlphabetical(arrayOfShows)
    arrayOfShows.forEach(show => {
        let optionTwo = document.createElement('option')
        optionTwo.text = show.name
        optionTwo.setAttribute('id', `${show.id}`);
        selectShows.appendChild(optionTwo)
        
    });
}

selectShows.addEventListener('change', choseShowValue)

function choseShowValue() {
     const idShow = selectShows.options[selectShows.selectedIndex].id
    getShows(idShow)
    console.log(idShow)
}


































window.onload = setup;
