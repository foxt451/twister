import React, { useEffect, useState } from "react";
import { BiTimer } from "react-icons/bi";

const Timer = ({
  timeTotal,
  onExpire,
  resetDeps,
  on,
}: {
  timeTotal: number;
  onExpire: () => void;
  on: boolean;
  resetDeps: any[];
}) => {
  const [timeLeft, setTimeLeft] = useState(timeTotal);
  useEffect(() => {
    if (!on) return;
    const interval = setInterval(() => {
      setTimeLeft((curTime) => curTime - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [on]);

  useEffect(() => {
    setTimeLeft(timeTotal);
  }, resetDeps);
  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
    }
  }, [timeLeft]);
  return (
    <article className="timer">
      {timeLeft} / {timeTotal} <BiTimer />
    </article>
  );
};

export default Timer;
