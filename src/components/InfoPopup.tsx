import React, { useState } from "react";

const InfoPopup = ({ text }: { text: JSX.Element }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <button
        className="info-popup-show"
        type="button"
        onClick={() => setIsShown(true)}
      >
        ?
      </button>
      <div className={`info-popup ${isShown && "show"}`}>
        <div className="popup-window">
          <button
            className="info-popup-close"
            type="button"
            onClick={() => setIsShown(false)}
          >
            X
          </button>
          <article className="info-popup-content">{text}</article>
        </div>
      </div>
    </>
  );
};

export default InfoPopup;
