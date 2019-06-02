import React from 'react';

const ux = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.67 31.41">
      <defs />
      <g id="Слой_2" data-name="Слой 2">
        <g id="Слой_2-2" data-name="Слой 2">
          <path
            fill={color}
            d="M25.77,29.41h-23l7.51-13a1,1,0,0,0,.08-.79V7.31l.15,0h2.71a1,1,0,0,0,0-2H10.5l-.15,0V2H16.5V15.63s0,.07,0,.1a1,1,0,0,0,.11.55l5.48,9.47a1,1,0,0,0,1.36.37,1,1,0,0,0,.37-1.37L18.5,15.51V2h1.33a1,1,0,0,0,0-2h-13a1,1,0,0,0,0,2H8.35V15.63s0,0,0,.07L.23,29.79a1,1,0,0,0-.23.62H0a1,1,0,0,0,1,1H25.77a.9.9,0,0,0,.9-.9v-.2A.91.91,0,0,0,25.77,29.41Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ux;
