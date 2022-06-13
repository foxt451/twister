import keyicons from "./images/keys/sprite.svg";
import SvgSpriteIcon from "./components/SvgSpriteIcon";

interface KeyInfo {
  icon: JSX.Element;
}

const getIcon = (name: string) => {
  return (
    <SvgSpriteIcon Icons={keyicons} className="keyboard-icon" name={name} />
  );
};

// const iconPathPrefix = "/images/keys";
// const getIcon = (name: string) => () => `${iconPathPrefix}/${name}`;
const keys: Map<string, KeyInfo> = new Map([
  ["Digit1", { icon: getIcon("ONE") }],
  ["Digit2", { icon: getIcon("TWO") }],
  ["Digit3", { icon: getIcon("THREE") }],
  ["Digit4", { icon: getIcon("FOUR") }],
  ["Digit5", { icon: getIcon("FIVE") }],
  ["Digit6", { icon: getIcon("SIX") }],
  ["Digit7", { icon: getIcon("SEVEN") }],
  ["Digit8", { icon: getIcon("EIGHT") }],
  ["Digit9", { icon: getIcon("NINE") }],
  ["Digit0", { icon: getIcon("ZERO") }],
  ["Minus", { icon: getIcon("MINUS") }],
  ["Equal", { icon: getIcon("EQUAL") }],
  ["KeyQ", { icon: getIcon("Q") }],
  ["KeyW", { icon: getIcon("W") }],
  ["KeyE", { icon: getIcon("E") }],
  ["KeyR", { icon: getIcon("R") }],
  ["KeyT", { icon: getIcon("T") }],
  ["KeyY", { icon: getIcon("Y") }],
  ["KeyU", { icon: getIcon("U") }],
  ["KeyI", { icon: getIcon("I") }],
  ["KeyO", { icon: getIcon("O") }],
  ["KeyP", { icon: getIcon("P") }],
  ["BracketLeft", { icon: getIcon("O") }],
  ["KeyA", { icon: getIcon("A") }],
  ["KeyS", { icon: getIcon("S") }],
  ["KeyD", { icon: getIcon("D") }],
  ["KeyF", { icon: getIcon("F") }],
  ["KeyG", { icon: getIcon("G") }],
  ["KeyH", { icon: getIcon("H") }],
  ["KeyJ", { icon: getIcon("J") }],
  ["KeyK", { icon: getIcon("K") }],
  ["KeyL", { icon: getIcon("L") }],
  ["KeyZ", { icon: getIcon("Z") }],
  ["KeyX", { icon: getIcon("X") }],
  ["KeyC", { icon: getIcon("C") }],
  ["KeyV", { icon: getIcon("V") }],
  ["KeyB", { icon: getIcon("B") }],
  ["KeyN", { icon: getIcon("N") }],
  ["KeyM", { icon: getIcon("M") }],
  ["Comma", { icon: getIcon("COMMA") }],
  ["Period", { icon: getIcon("PERIOD") }],
]);

export { keys };
export type { KeyInfo };
