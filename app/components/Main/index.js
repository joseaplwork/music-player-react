import React from 'react';
import styles from './styles.scss';

const Main = (props) => {
  const { children, className } = props;
  const classes = className ? `${styles.wrapper} ${className}` : styles.wrapper;

  return (
    <main className={classes}>
      {children}
    </main>
  );
};

Main.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default Main;
