import React from 'react';
import styles from './icons.scss';

const NextIcon = (props) => {
  const { className, inverted } = props;
  const classes = [styles.icon];

  if (inverted) classes.push(styles.inverted);
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 48 48"
        viewBox="0 0 48 48">
        <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z" />
        <path d="M0 0h48v48H0z" fill="none" />
      </svg>
    </div>
  );
};

NextIcon.propTypes = {
  className: React.PropTypes.string,
  inverted: React.PropTypes.bool,
};

export default NextIcon;
