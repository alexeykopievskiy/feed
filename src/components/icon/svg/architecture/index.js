import React from 'react';

const architecture = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.63 29.94">
      <defs />
      <title>Architecture</title>
      <g id="Слой_2" data-name="Слой 2">
        <g id="Слой_1-2" data-name="Слой 1">
          <path
            fill={color}
            d="M7.56,2V4.91a1,1,0,0,0,2,0V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V28.94a1,1,0,0,0,2,0V2Z"
          />
          <path
            fill={color}
            d="M22.55,9.88a1,1,0,0,0-.92-.63h-13a1,1,0,0,0-.47.13.92.92,0,0,0-.61.86V29a.93.93,0,0,0,.93.93h.15A.93.93,0,0,0,9.56,29V11.25H20.63V27.94H15.09V16.59a1,1,0,0,0-2,0V28.94a1,1,0,0,0,1,1,.35.35,0,0,0,.11,0,.45.45,0,0,0,.11,0H21.7a.93.93,0,0,0,.93-.93V10.24A.86.86,0,0,0,22.55,9.88Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default architecture;
