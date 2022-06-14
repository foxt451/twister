import React, { useState, useEffect, Dispatch } from "react";
import Score from "./Score";
import LockedKeys from "./LockedKeys";
import CurrentKey from "./CurrentKey";
import { keys, KeyInfo } from "../keys";
import { GameState } from "../App";
import Timer from "./Timer";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { ImExit } from "react-icons/im";

// const codes: Set<string> = new Set();
const selectRandom = <T,>(list: T[]) => {
  return list[Math.floor(Math.random() * list.length)];
};
function Game({
  dispatchGameState,
  dispatchGameScore,
  rollOver,
  speed,
}: {
  dispatchGameState: Dispatch<GameState>;
  dispatchGameScore: Dispatch<number>;
  rollOver: number;
  speed: number;
}) {
  console.log(rollOver);

  // on initial render it will be increased in useffect to 0
  const [hasStarted, setHasStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [locked, setLocked] = useState<Set<string>>(new Set());
  const [currentToPress, setCurrentToPress] = useState<string>(() => {
    return selectRandom([...keys.keys()]);
  });

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (currentToPress === e.code) {
        setScore((score) => score + 1);
        setHasStarted(true);
        setLocked((curSet) => {
          let newArr = [...curSet, currentToPress];
          if (newArr.length >= rollOver) {
            newArr = newArr.slice(1);
          }
          return new Set(newArr);
        });
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [currentToPress, rollOver]);

  // useEffect(() => {
  //   const handleKeydown = (e: KeyboardEvent) => {
  //     codes.add(JSON.stringify([e.code, e.key]));
  //     console.log(JSON.stringify([...codes]));
  //   };
  //   document.addEventListener("keydown", handleKeydown);
  // }, []);

  const lose = () => {
    dispatchGameScore(score);
    dispatchGameState("lose");
  };

  useEffect(() => {
    const handleKeyup = (e: KeyboardEvent) => {
      if (locked.has(e.code)) {
        lose();
      }
    };
    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
  }, [locked, score]);

  useEffect(() => {
    setCurrentToPress((cur) => {
      const availableKeys = [...keys.keys()].filter(
        (key) => !locked.has(key) && key !== cur
      );
      const randomKey = selectRandom(availableKeys);
      return randomKey;
    });
  }, [locked]);

  const onExpire = () => {
    lose();
  };
  return (
    <>
      <div className="statistics">
        <Score score={score} />
        <Timer
          timeTotal={speed}
          onExpire={onExpire}
          on={hasStarted}
          resetDeps={[currentToPress]}
        />
        <button type="button" className="exit-btn" onClick={lose}>
          <ImExit />
        </button>
      </div>
      <div className="all-keys-container">
        <CurrentKey currentKey={currentToPress} />
        <h3 className="explanation current-explanation">
          <span className="message-outline">
            <AiOutlineArrowUp />
            <AiOutlineArrowUp />
            <AiOutlineArrowUp />
            <AiOutlineArrowUp />
            <AiOutlineArrowUp />
            <br />
            Now press it without releasing keys below, if any
          </span>
        </h3>
        <h3 className="explanation locked-explanation">
          <span className="message-outline">
            Keep 'em pressed!
            <br />
            <AiOutlineArrowDown />
            <AiOutlineArrowDown />
            <AiOutlineArrowDown />
            <AiOutlineArrowDown />
            <AiOutlineArrowDown />
          </span>
        </h3>
        <LockedKeys keys={locked} />
      </div>
    </>
  );
}

export default Game;
