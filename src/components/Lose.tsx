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
      Your score: {score}
      <button type="button" onClick={() => dispatchGameState("playing")}>
        Try again
      </button>
      <button type="button" onClick={() => dispatchGameState("menu")}>
        To menu
      </button>
    </div>
  );
};

export default Lose;
