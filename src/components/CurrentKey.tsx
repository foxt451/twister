import React from "react";
import KeyComponent from "./Key";
import "./styles/CurrentKey.css";

const CurrentKey = ({ currentKey }: { currentKey: string }) => {
  return (
    <div>
      <KeyComponent keyElem={currentKey} />
    </div>
  );
};

export default CurrentKey;
