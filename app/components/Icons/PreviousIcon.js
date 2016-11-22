import React from 'react';
import styles from './icons.scss';

const PreviousIcon = (props) => {
  const { className, inverted } = props;
  const classes = className ? [styles.icon, className] : [styles.icon];

  if (inverted) classes.push(styles.inverted);

  return (
    <div className={classes.join(' ')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 48 48"
        viewBox="0 0 48 48">
        <path d="M12 12h4v24h-4zm7 12l17 12V12z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </div>
  );
};

PreviousIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default PreviousIcon;
