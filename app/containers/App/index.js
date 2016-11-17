/**
 *
 * App.js
 *
 */

import React from 'react';

function App(props) {
  const { children } = props;

  return (
    <div>
      {React.Children.toArray(children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
