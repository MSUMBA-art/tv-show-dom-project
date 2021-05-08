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

// function setup() {
//     getShowData('https://api.tvmaze.com/shows', (allShows) => {
//         appendToOptionShows(allShows)
//         getAllShows(allShows[0].id)
//     })
// }

// function getShows(id) {
//     getData(`https://api.tvmaze.com/shows/${id}/episodes`, (allEpisodes) => {
//         makeEpisodesPage(allEpisodes);
//         searchInput(allEpisodes)
//         appendToTheSelect(allEpisodes)
//     })
// }

// function createElement(tagName, className, parentElement) {
//     const element = document.createElement(tagName)
//     element.className = className
//     parentElement.appendChild(element)
//     return element
// }

// const rootElement = document.getElementById('root');
// const firstDiv = createElement('div', 'navbar', 'rootElem');
// const selectShows = createElement('select', 'shows', 'firstDiv');
// const inputTag = createElement("input", "search-input", firstDiv);
// const pLabelTag = createElement("p", "p-label-tag", firstDiv);
// const secondDiv = createElement("div", "cards row", rootElem);
// rootElem.className = "container";
// inputTag.placeholder = "Search episodes..";

// function sortShowsAlphabetical(showsArray) {
//     showsArray.sort(function (a, b){
//         var nameA = a.name.toUpperCase();
//         var nameB = b.name.toUpperCase();
//         if (nameA < nameB) {
//             return -1;
//         }
//         return 0;
//     })

// }

// function appendToOptionShows(arrayOfShows) {
//     sortShowsAlphabetical(arrayOfShows)
//     arrayOfShows.forEach(show => {
//         let optionTwo = document.createElement('option')
//         optionTwo.text = show.name
//         optionTwo.setAttribute('id', `${show.id}`);
//         selectShows.appendChild(optionTwo)
        
//     });
// }

// selectShows.addEventListener('change', choseShowValue)

// function choseShowValue() {
//      const idShow = selectShows.options[selectShows.selectedIndex].id
//     getShows(idShow)
//     console.log(idShow)
// }

let body = document.getElementById("background");
const cardContainer = document.getElementById("cardContainer");
const rootElem = document.getElementById("root");
const displayNum = document.getElementById("display");
let allEpisodes = [];
let pickAnEpisode = getAllEpisodes();
const allShow = getAllShows();
let showEpisodes = [];
const showSelector = document.getElementById("show");


//Sorting shows in Alphabetical order
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

const sortShows = getAllShows.sort();

// creating show selector

function creatShowSelector() {
    sortShows.forEach((item) => {
    let option = document.createElement("option");
    option.value = item.id;
    option.innerHTML = item.name;
    showSelector.appendChild(option);
  });

}

// pick a show, change page to choosen show's episodes, create an eventlister

showSelector.addEventListener("change", fetchShow);

function fetchShow() {
    let selectValue = showSelector.value;
    let chosenShow = sortShows.filter((show) => show.id == selectValue).map((p) => p.id).toString();
    fetch(`https://api.tvmaze.com/shows/${choosenShow}/episodes`).then((res) => response.json()) .then((data) => {
      allEpisodes = data;
      makePageForEpisodes(allEpisodes);
      createEpSelector(allEpisodes);
      showEpisodes = data;
      console.log(showEpisodes);
    });
}

function setup() {
  fetch("https://api.tvmaze.com/shows/82/episodes").then((res) => response.json()).then((data) => {
      allEpisodes = data;
      makePageForEpisodes(allEpisodes);
      createEpSelector(allEpisodes);
    });
  createShowSelector();
}

function makePageForEpisodes(episodeList) {
    cardContainer.innerHTML = "";
    showEpisodes = episodeList;
    console.log(showEpisodes);
    let numOfEp = episodeList.length;
    displayNum.innerHTML = `Displaying ${numOfEp.length} episodes`;

episodeList.forEach(element => {
    let Div = document.createElement("div");
    Div.className = "card";
    let divTittle = document.createElement("div");
    divTittle.className = "headerCard";
    let epsName = document.createElement("h4");
    let epSummary = document.createElement("p");
    let epImage = document.createElement("img");
    epsName.textContent = `${element.name}-S${addPad(element.season)}E${addPad(
      element.number
    )}`;
    epSummary.innerHTML = element.summary;
     let subtituteImage =
      "https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_200x200.jpg";
    epImage.src = element.image ? element.image.medium : subtituteImage;
    rootElem.appendChild(cardContainer);
    cardContainer.appendChild(Div);
    Div.appendChild(titleDiv);
    titleDiv.appendChild(epsName);
    Div.appendChild(epImage);
    Div.appendChild(epSummary);
  });
}
function addPad(n) {
  return n < 10 ? n.toString().padStart(2, "0") : n.toString();
}
    let inputField = document.getElementById("input");
inputfield.addEventListener("keyup", findValue);
function findValue() {
  let values = inputfield.value.toLowerCase();
  let episodes = allEpisodes.filter((ep) =>
    (ep.name + ep.summary).toLowerCase().includes(values)
  );

  makePageForEpisodes(episodes);
  console.log(`Displaying ${episodes.length}/73 episodes`);
  return (displayNum.innerHTML = `Displaying ${episodes.length}/ ${allEpisodes.length} episodes`);
}

// level 300
function createEpSelector(data) {
  let select = document.getElementById("episodes");
  select.innerHTML = "";
  select.innerHTML = '<option value="all">Select An Episode</option></select>';

  console.log(data);
  data.forEach((item) => {
    let option = document.createElement("option");
    option.value = item.id;
    option.innerHTML = `S${addPad(item.season)}E${addPad(item.number)} - ${item.name }`;
    select.appendChild(option);
  });

  select.addEventListener("change", selectEpisode);
  function selectEpisode() {
    let valueOfSele = select.value;
    console.log(valueOfSele);
    let selectedEp = data.filter((ep) => ep.id == valueOfSele);

    if (valueOfSele === "all") {
      makePageForEpisodes(data);
    } else {
      makePageForEpisodes(selectedEp);
    }
  }
}
window.onload = setup;

