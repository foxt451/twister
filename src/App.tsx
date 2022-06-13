import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";
import Lose from "./components/Lose";
import Menu from "./components/Menu";

type GameState = "menu" | "playing" | "lose";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [gameScore, setGameScore] = useState(0);
  const [rollOver, setRollOver] = useState(3);
  const [speed, setSpeed] = useState(30);
  let innerComp;
  switch (gameState) {
    case "playing":
      innerComp = (
        <Game
          dispatchGameState={setGameState}
          rollOver={3}
          dispatchGameScore={setGameScore}
        />
      );
      break;
    case "menu":
      innerComp = (
        <Menu
          dispatchGameState={setGameState}
          dispatchRollOver={setRollOver}
          dispatchSpeed={setSpeed}
        />
      );
      break;
    case "lose":
      innerComp = <Lose dispatchGameState={setGameState} score={gameScore} />;
      break;
  }

  return <div className="App">{innerComp}</div>;
}

export type { GameState };
export default App;
