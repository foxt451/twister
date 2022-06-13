import React from "react";
import { keys } from "../keys";
import "./styles/Key.css";

const KeyComponent = ({ keyElem }: { keyElem: string }) => {
  if (!keys.has(keyElem)) throw Error(`Unknown key code ${keyElem}`);
console.log(keys.get(keyElem)!.icon);

  return keys.get(keyElem)!.icon;
};

export default KeyComponent;
