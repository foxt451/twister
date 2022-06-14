import React from "react";
import { keys } from "../keys";

const KeyComponent = ({ keyElem }: { keyElem: string }) => {
  if (!keys.has(keyElem)) throw Error(`Unknown key code ${keyElem}`);

  return keys.get(keyElem)!.icon;
};

export default KeyComponent;
