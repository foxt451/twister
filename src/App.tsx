import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import LockedKeys from "./components/LockedKeys";
import CurrentKey from "./components/CurrentKey";
import logo from "./logo.svg";
import { keys } from "./keys";
import "./App.css";

const codes: Set<string> = new Set();
function App() {
  const [score, setScore] = useState(0);
  const [locked, setLocked] = useState<string[]>([]);
  const [currentToPress, setCurrentToPress] = useState<string>("");

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.repeat) return;

      if (currentToPress === e.code) {
        setLocked((locked) => [...locked, currentToPress]);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [locked, currentToPress]);

  // useEffect(() => {
  //   const handleKeyup = (e: KeyboardEvent) => {
  //     if (currentToPress === e.code) {
  //       setLocked((locked) => [...locked, currentToPress]);
  //     }
  //   };
  //   document.addEventListener("keyup", handleKeyup);
  //   return () => document.removeEventListener("keyup", handleKeyup);
  // }, [locked]);

  useEffect(() => {
    const availableKeys = keys.filter((key) => !locked.includes(key));
    const randomKey =
      availableKeys[Math.floor(Math.random() * availableKeys.length)];

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

export default App;
