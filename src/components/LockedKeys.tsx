import React from "react";
import KeyComponent from "./Key";

const LockedKeys = ({ keys }: { keys: Set<string> }) => {
  return (
    <div className="locked-keys">
        {[...keys].map((key) => (
          <KeyComponent key={key} keyElem={key} />
        ))}
    </div>
  );
};

export default LockedKeys;
