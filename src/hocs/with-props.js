import React from 'react';

export default function(Component, props) {
  return class ComponentWithProps extends React.Component {
    render() {
      return <Component {...this.props} {...props} />;
    }
  };
}
