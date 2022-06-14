import React, { Dispatch } from "react";
import { GameState } from "../App";

const Lose = ({
  dispatchGameState,
  score,
}: {
  dispatchGameState: Dispatch<GameState>;
  score: number;
}) => {
  return (
    <div className="lose">
      <h2>Keep it up!</h2>
      <div className="statistics">
        <article className="score">Your score: {score}</article>
        <button type="button" onClick={() => dispatchGameState("playing")}>
          Try again
        </button>
        <button type="button" onClick={() => dispatchGameState("menu")}>
          To menu
        </button>
      </div>
    </div>
  );
};

export default Lose;
