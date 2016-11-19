import React from 'react';
import styles from './styles.scss';

const A = (props) => {
  const { className, children, ...attrs } = props;
  const classes = className ? [styles.base, className].join(' ') : [styles.base].join(' ');

  return (
    <a className={classes} {...attrs}>{children}</a>
  );
};

A.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default A;
