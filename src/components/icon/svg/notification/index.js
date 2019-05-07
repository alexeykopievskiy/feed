import React from 'react';

const notification = props => {
  const { color, notify, ...rest } = props;
  if (notify) {
    return (
      <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13.07">
        <defs />
        <title>Notification_new</title>
        <g>
          <g>
            <path
              fill={color}
              d="M6,13.07a1.69,1.69,0,0,0,1.69-1.68H4.31A1.68,1.68,0,0,0,6,13.07Z"
            />
            <path
              fill={color}
              d="M11.35,9.35h-.08V6.09a.09.09,0,0,0,0,0A4.86,4.86,0,0,0,11,4.62a3,3,0,0,1-1.17.57,4,4,0,0,1,.12.92v0h0V9.35H2V6.13a4,4,0,0,1,4-4H6A3,3,0,0,1,6.27.89,2.48,2.48,0,0,0,6,.86,5.26,5.26,0,0,0,.74,6a.09.09,0,0,0,0,0V9.35H.65a.65.65,0,1,0,0,1.3h10.7a.65.65,0,1,0,0-1.3Z"
            />
            <path
              fill="#ff84c2"
              d="M9.12,4.32A2.16,2.16,0,1,0,7,2.16,2.16,2.16,0,0,0,9.12,4.32Z"
            />
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12.2"><defs></defs><title>Ресурс 19</title><g><g><path fill={color} d="M11.35,8.49h-.08V5.23a.09.09,0,0,0,0-.05,5.26,5.26,0,0,0-10.52,0,.09.09,0,0,0,0,0V8.49H.65a.65.65,0,1,0,0,1.3h10.7a.65.65,0,1,0,0-1.3ZM10,5.3h0V8.49H2V5.27a4,4,0,0,1,8,0Z"/><path fill={color} d="M6,12.2a1.68,1.68,0,0,0,1.69-1.67H4.32A1.68,1.68,0,0,0,6,12.2Z"/></g></g></svg>
    );
  }
};

export default notification;
