import React, { Dispatch, useState } from "react";
import { GameState } from "../App";
import InfoPopup from "./InfoPopup";

const rolloverInfoText = (
  <p>
    Basically, how many keys your keyboard is capable of handling simulatenously
    (yes, there is often a limit, mine has 3, some can have even 2). There will
    be no more than this many keys for you to press. Select 2 and you'll be safe!
    <br />
    <br />
    <i>
      A keyboard with n-key rollover, or abbreviated as NKRO, has the ability to
      scan each button press individually, as opposed to having the PC do it. As
      a result, every pressed button, or key, is noted, even if you’re pressing
      a bunch of keys simultaneously. Sometimes you'll see the "n" in n-key
      rollover replaced with a number. That number tells you how many keys you
      can press simultaneously with the keyboard being aware. For example, if
      your keyboard has 6-key rollover, you can press six keys at once with
      successful input. N-key rollover is particularly relevant/helpful for
      gaming keyboards.
    </i>
  </p>
);

const speedInfoText = (
  <p>
    Seconds you are given to press the specified key (well, the opposite of speed, I
    guess!)
  </p>
);

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
    console.log(rollOver);

    dispatchRollOver(Number(rollOver));
    dispatchSpeed(Number(speed));
    dispatchGameState("playing");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rollOver">
        Rollover:
        <InfoPopup text={rolloverInfoText} />
      </label>
      <input
        type="number"
        id="rollOver"
        min={1}
        value={rollOver}
        onChange={(e) => setRollOver(e.target.value)}
      />

      <label htmlFor="speed">
        Speed: <InfoPopup text={speedInfoText} />
      </label>
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
