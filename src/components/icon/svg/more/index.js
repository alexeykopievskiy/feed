import React from 'react';

const more = props => {
  const { color, ...rest } = props;
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.667 12"><defs></defs><g transform="translate(-1052 -482)"><g transform="translate(1052 482)"><ellipse fill={color} cx="1.333" cy="1.333" rx="1.333" ry="1.333"/></g><g transform="translate(1052 486.667)"><ellipse fill={color} cx="1.333" cy="1.333" rx="1.333" ry="1.333"/></g><g transform="translate(1052 491.333)"><ellipse fill={color} cx="1.333" cy="1.333" rx="1.333" ry="1.333"/></g></g></svg>
  );
};

export default more;
