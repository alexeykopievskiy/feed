import React from 'react';

const plus = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <defs />
      <g transform="translate(-1052.5 -539)">
        <rect
          fill={color}
          width="1.455"
          height="8"
          rx="0.727"
          transform="translate(1055.773 539)"
        />
        <rect
          fill={color}
          width="1.455"
          height="8"
          rx="0.727"
          transform="translate(1052.5 543.727) rotate(-90)"
        />
      </g>
    </svg>
  );
};

export default plus;
