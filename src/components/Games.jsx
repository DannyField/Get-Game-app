import React from "react";

class Games extends React.Component {
  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const gameList = await response.json();
  }

  render() {
    return <h1>GIVE ME</h1>;
  }

  // https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added

  //   // Pass the response to create a json
  //   .then((res) => res.json())
  //   // Then pass the json data to hello function with the data as a prop
  //   .then((data) => gameItem(data));
  // return (
  //   <>
  //     <h1></h1>
  //   </>
  // );
}

// class Games extends React.Component {
//   async componentDidUpdate() {
//     const response = await fetch(
//       "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added"
//     );
//     const games = await response.json();
//     this.setState({ games: games });
//   }

const gameItem = (data) => {
  console.log(data);
  // Should be death stranding
  console.log(data.results[0].name);
  // Will be Black Mesa
  const mesa = data.results[5].name;
  console.log(mesa);
};

//   render() {
//     const games = this.state?.games;
//     return (
//       <>
//         {games &&
//           games.map((games) => {
//             return <h1>{games.results[3].name}</h1>;
//           })}
//       </>
//     );
//   }
// }

// export default Games;

// https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added

// const Givegame = (data) => {
//   console.log(data);
//   let num1 = Math.floor(Math.random() * 19);
//   let num2 = Math.floor(Math.random() * 19);
//   const game = document.querySelector(".game");
//   game.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <h2>${data.results[num1].name}</h2>
//     <img src="${data.results[num1].background_image}" />
//     `
//   );
// };

// WORKING

// const Games = () => {
//   const gameArray = fetch(
//     "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added"
//   )
//     // Pass the response to create a json
//     .then((res) => res.json())
//     // Then pass the json data to hello function with the data as a prop
//     .then((data) => hello(data));
//   return (
//     <>
//       <h1></h1>
//     </>
//   );
// };
