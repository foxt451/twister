import React from "react";

const SvgSpriteIcon = ({
  name,
  className,
  Icons,
}: {
  name: string;
  className: string;
  Icons: string;
}) => (
  <svg className={className}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default SvgSpriteIcon;
