import React from "react";

const LockedKeys = ({ keys }: { keys: string[] }) => {
    console.log(keys);
    
  return (
    <div>
      {keys.map((key) => (
        <article key={key}>{key}</article>
      ))}
    </div>
  );
};

export default LockedKeys;
