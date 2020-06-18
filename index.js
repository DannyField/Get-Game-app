// import { numRandom } from "./random.js";
// console.log(numRandom());

// Grabs the game list from the api
fetch(
  "https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7"
)
  .then((res) => res.json())
  .then((data) => giveGame(data));

//   handle the game data from the api
const giveGame = (data) => {
  console.log(data);
  let num1 = Math.floor(Math.random() * 16);
  let num2 = Math.floor(Math.random() * 16);
  const game = document.querySelector(".game");
  game.insertAdjacentHTML(
    "afterbegin",
    `
    <h2>${data.results[num1].name}</h2>
    <img src="${data.results[num1].background_image}" />
    `
  );
  //   game.insertAdjacentHTML("afterbegin", `<h2>${data.results[num2].name}</h2>`);
};
