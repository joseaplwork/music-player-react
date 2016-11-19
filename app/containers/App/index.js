/**
 *
 * App.js
 *
 */

import React from 'react';
import Header from 'MP/components/Header';

function App(props) {
  const { children } = props;

  return (
    <section>
      <Header />
      {React.Children.toArray(children)}
    </section>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
