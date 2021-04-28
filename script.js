//You can edit ALL of the code here
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

