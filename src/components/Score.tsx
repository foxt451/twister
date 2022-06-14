import React from "react";

const Score = ({ score }: { score: number }) => {
  return <article className="score">Score: {score}</article>;
};

export default Score;
