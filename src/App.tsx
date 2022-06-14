import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/index.css";
import Game from "./components/Game";
import Lose from "./components/Lose";
import Menu from "./components/Menu";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

type GameState = "menu" | "playing" | "lose";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [gameScore, setGameScore] = useState(0);
  const [rollOver, setRollOver] = useState(3);
  const [speed, setSpeed] = useState(30);
  const [shouldRenderMobile, setShouldRenderMobile] = useState(!isMobile);
  let innerComp;
  switch (gameState) {
    case "playing":
      innerComp = (
        <Game
          dispatchGameState={setGameState}
          rollOver={rollOver}
          dispatchGameScore={setGameScore}
          speed={speed}
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

  return (
    <div className="App">
      {shouldRenderMobile ? (
        innerComp
      ) : (
        <div className="mobile">
          <h2>This app works best on desktop! (you need to have a keyboard)</h2>
          <button
            className="mobile-continue-button"
            onClick={() => setShouldRenderMobile(true)}
          >
            Continue anyway...
          </button>
        </div>
      )}
    </div>
  );
}

export type { GameState };
export default App;
