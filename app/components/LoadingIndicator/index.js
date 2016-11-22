import React from 'react';
import styles from './styles.scss';

const LoadingIndicator = (props) => {
  const { className, absolute } = props;
  const classes = absolute ? `${styles.loader} ${styles.loaderAbsolute}` : styles.loader;
  const svgClasses = className ? `${styles.circular} ${className}` : styles.circular;

  return (
    <div className={classes}>
      <svg className={svgClasses} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

LoadingIndicator.propTypes = {
  className: React.PropTypes.string,
  absolute: React.PropTypes.bool,
};

export default LoadingIndicator;
