import React from 'react';

const search = props => {
  const { color, ...rest } = props;
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10.55 12.31"
    >
      <title>Search</title>
      <g>
        <g>
          <path
            fill={color}
            d="M8.87,9.32a1.31,1.31,0,0,0-.12-.11,5.21,5.21,0,0,0,1.8-3.94,5.28,5.28,0,1,0-5.28,5.28,5.19,5.19,0,0,0,2.45-.63.6.6,0,0,0,.08.16L9.16,12a.66.66,0,1,0,1.08-.76ZM1.3,5.27a4,4,0,1,1,4,4A4,4,0,0,1,1.3,5.27Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default search;
