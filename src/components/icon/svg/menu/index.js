import React from 'react';

const cross = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11.334"><defs></defs><g transform="translate(-1207 -375)"><path fill={color} d="M22.833,38.334a.833.833,0,0,1,0-1.667H37.166a.833.833,0,1,1,0,1.667Zm0-4.834a.833.833,0,0,1,0-1.667H37.166a.833.833,0,0,1,0,1.667Zm0-4.833a.833.833,0,0,1,0-1.667H37.166a.833.833,0,0,1,0,1.667Z" transform="translate(1185 348)"/></g></svg>
  );
};

export default cross;
