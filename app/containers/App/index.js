/**
 *
 * App
 *
 */

import React from 'react';

const App = (props) => {
  const { children } = props;

  return (
    <section>
      {React.Children.toArray(children)}
    </section>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
