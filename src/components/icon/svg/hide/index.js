import React from 'react';

const hide = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><defs></defs><g transform="translate(-1251 -373)"><path fill={color} d="M15.786,14.759l-3.078-3.078a15.535,15.535,0,0,0,3.163-3.27.727.727,0,0,0,0-.822C15.73,7.382,12.349,2.52,8,2.52a7.131,7.131,0,0,0-3.467.985L1.241.213A.727.727,0,0,0,.212,1.242L3.29,4.319l9.01,9.01,2.457,2.457a.727.727,0,0,0,1.029-1.028Z" transform="translate(1251.001 373)"/><path fill={color} d="M.128,110.816a.727.727,0,0,0,0,.822c.142.207,3.522,5.069,7.873,5.069a6.4,6.4,0,0,0,2.046-.349l-7.871-7.871A15.489,15.489,0,0,0,.128,110.816Z" transform="translate(1251 269.773)"/></g></svg>
  );
};

export default hide;
