import React from 'react';

const cross = props => {
  const { color, ...rest } = props;
  console.log(color,'a')
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><defs></defs><g transform="translate(-1083 -482)"><g transform="translate(1083 482)"><path fill={color} d="M7.322,6.016l4.487-4.487a.658.658,0,0,0,0-.928L11.415.208a.658.658,0,0,0-.928,0L6,4.694,1.513.208a.658.658,0,0,0-.928,0L.192.6a.657.657,0,0,0,0,.928L4.679,6.016.192,10.5a.658.658,0,0,0,0,.928l.393.393a.658.658,0,0,0,.928,0L6,7.337l4.487,4.487a.651.651,0,0,0,.464.192h0a.651.651,0,0,0,.464-.192l.393-.393a.658.658,0,0,0,0-.928Z" transform="translate(0 -0.016)"/></g></g></svg>
  );
};

export default cross;
