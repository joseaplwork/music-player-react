import React from 'react';
import styles from './styles.scss';

const H1 = (props) => {
  const { className, children, ...attrs } = props;
  const classes = className ? [styles.base, className].join(' ') : [styles.base].join(' ');

  return (
    <h1 className={classes} {...attrs}>
      {children}
    </h1>
  );
};

H1.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default H1;
