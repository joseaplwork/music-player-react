import React from 'react';
import styles from './styles.scss';

const H2 = (props) => {
  const { className, children, ...attrs } = props;
  const classes = className ? [styles.base, className].join(' ') : [styles.base].join(' ');

  return (
    <h2 className={classes} {...attrs}>
      {children}
    </h2>
  );
};

H2.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.any,
};

export default H2;
