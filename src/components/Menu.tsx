import React, { Dispatch, useState } from "react";
import { GameState } from "../App";

const Menu = ({
  dispatchGameState,
  dispatchRollOver,
  dispatchSpeed,
}: {
  dispatchGameState: Dispatch<GameState>;
  dispatchRollOver: Dispatch<number>;
  dispatchSpeed: Dispatch<number>;
}) => {
  const [rollOver, setRollOver] = useState("3");
  const [speed, setSpeed] = useState("30");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchRollOver(Number(rollOver))
    dispatchSpeed(Number(speed))
    dispatchGameState("playing")
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rollOver">Rollover:</label>
      <input
        type="number"
        id="rollOver"
        min={1}
        value={rollOver}
        onChange={(e) => setRollOver(e.target.value)}
      />

      <label htmlFor="speed">Speed:</label>
      <input
        type="number"
        id="speed"
        min={2}
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <button type="submit">Play!</button>
    </form>
  );
};

export default Menu;
