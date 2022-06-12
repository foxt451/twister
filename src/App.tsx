import React, { useState } from "react";
import Score from "./components/Score";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Score score={score} />
    </>
  );
}

export default App;
