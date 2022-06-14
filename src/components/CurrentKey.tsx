import React from "react";
import KeyComponent from "./Key";

const CurrentKey = ({ currentKey }: { currentKey: string }) => {
  return (
    <div className="current-key">
      <KeyComponent keyElem={currentKey} />
    </div>
  );
};

export default CurrentKey;
