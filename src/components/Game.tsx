import React, { useState, useEffect, Dispatch } from "react";
import Score from "./Score";
import LockedKeys from "./LockedKeys";
import CurrentKey from "./CurrentKey";
import { keys, KeyInfo } from "../keys";
import { GameState } from "../App";

// const codes: Set<string> = new Set();
const selectRandom = <T,>(list: T[]) => {
  return list[Math.floor(Math.random() * list.length)];
};
function Game({
  dispatchGameState,
  dispatchGameScore,
  rollOver,
}: {
  dispatchGameState: Dispatch<GameState>;
  dispatchGameScore: Dispatch<number>;
  rollOver: number;
}) {
  // on initial render it will be increased in useffect to 0
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

  useEffect(() => {
    const handleKeyup = (e: KeyboardEvent) => {
      if (locked.has(e.code)) {
        dispatchGameScore(score);
        dispatchGameState("lose");
      }
    };
    document.addEventListener("keyup", handleKeyup);
    return () => document.removeEventListener("keyup", handleKeyup);
  }, [locked, dispatchGameState]);

  useEffect(() => {
    const availableKeys = [...keys.keys()].filter((key) => !locked.has(key));
    const randomKey = selectRandom(availableKeys);
    setCurrentToPress(randomKey);
  }, [locked]);
  return (
    <>
      <Score score={score} />
      <LockedKeys keys={locked} />
      <CurrentKey currentKey={currentToPress} />
    </>
  );
}

export default Game;
