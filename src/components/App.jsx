import React from "react";
// import Games from "./Games";
// import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added"
    );
    const games = await response.json();
    console.log(games);
    this.setState({
      games: games,
    });
  }

  render() {
    const games = this.state?.games;
    console.log(games);
    return (
      <>
        {games &&
          games.map((game, index) => {
            return (
              <div key={index}>
                <h1>{game.results}</h1>
              </div>
            );
          })}
      </>
    );
  }
}

export default App;

// data = Array.from(props.data);
// .map is only available on an array
// this.setState({ data: data.conversations });
